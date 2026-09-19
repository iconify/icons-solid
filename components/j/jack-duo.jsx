import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jk5dtfgxh.css';
import '../../css/n/nefl88bbh.css';
import '../../css/m/ml9pot7bx.css';
import '../../css/n/nyp5msqgt.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="jk5dtfgxh"/><path class="nefl88bbh"/><path class="ml9pot7bx"/><path class="nyp5msqgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:jack-duo"} {...others} />);
}

export default Component;
