import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c22mdffki.css';
import '../../css/z/zo3lmtbyu.css';
import '../../css/s/s7ergcbpy.css';
import '../../css/p/pvri_0gfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c22mdffki"/><path class="zo3lmtbyu"/><path class="s7ergcbpy"/><path class="pvri_0gfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:science-physics-law"} {...others} />);
}

export default Component;
