import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/id2bewgua.css';
import '../../css/j/jypc2sbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="id2bewgua"/><path class="jypc2sbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-pen-line"} {...others} />);
}

export default Component;
