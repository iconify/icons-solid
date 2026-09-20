import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scx1z0ypn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="scx1z0ypn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:badge-verified-solid"} {...others} />);
}

export default Component;
