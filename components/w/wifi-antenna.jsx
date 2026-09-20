import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0__cy2tr.css';
import '../../css/j/jgfygccas.css';
import '../../css/b/b8gzgrtfe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b0__cy2tr"/><path class="jgfygccas"/><path class="b8gzgrtfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wifi-antenna"} {...others} />);
}

export default Component;
