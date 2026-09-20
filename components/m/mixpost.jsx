import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g5kt4xr8s.css';
import '../../css/u/u_8a0r-bt.css';
import '../../css/z/zg70rbcur.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g5kt4xr8s"/><path class="u_8a0r-bt"/><path class="zg70rbcur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mixpost"} {...others} />);
}

export default Component;
