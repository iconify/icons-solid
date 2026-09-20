import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ib8m30yfk.css';
import '../../css/g/gv-sombpu.css';
import '../../css/y/yfmno8cgl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ib8m30yfk"/><path class="gv-sombpu"/><path class="yfmno8cgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pen-tool"} {...others} />);
}

export default Component;
