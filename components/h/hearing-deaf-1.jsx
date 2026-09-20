import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lf02mkbqe.css';
import '../../css/r/rom_u-0bp.css';
import '../../css/b/byszr5bmh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lf02mkbqe"/><path class="rom_u-0bp"/><path class="byszr5bmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hearing-deaf-1"} {...others} />);
}

export default Component;
