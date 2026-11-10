import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux6p4ubfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ux6p4ubfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:shield-x-mark-solid"} {...others} />);
}

export default Component;
