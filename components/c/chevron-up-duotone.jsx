import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb_nxg3mr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hb_nxg3mr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:chevron-up-duotone"} {...others} />);
}

export default Component;
