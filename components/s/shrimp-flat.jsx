import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sxcm5abuf.css';
import '../../css/x/x29ox6bmk.css';
import '../../css/i/i0m6f0omg.css';
import '../../css/g/gx4ss2b1u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sxcm5abuf"/><path class="x29ox6bmk"/><path class="i0m6f0omg"/><path clip-rule="evenodd" class="gx4ss2b1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shrimp-flat"} {...others} />);
}

export default Component;
