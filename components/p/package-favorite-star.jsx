import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udzn9ffqd.css';
import '../../css/p/pve2kdb4l.css';
import '../../css/e/esyet1bim.css';
import '../../css/z/zwy5v3b1k.css';
import '../../css/c/cu6-4lbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="udzn9ffqd"/><path class="pve2kdb4l"/><path class="esyet1bim"/><path class="zwy5v3b1k"/><path class="cu6-4lbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:package-favorite-star"} {...others} />);
}

export default Component;
