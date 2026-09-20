import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izq6l1bsl.css';
import '../../css/y/y5q7-6byf.css';
import '../../css/r/rcr7nqbwb.css';
import '../../css/s/sluqu70kt.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="izq6l1bsl"/><path class="y5q7-6byf"/><path class="rcr7nqbwb"/><path class="sluqu70kt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-generate-variation-spark"} {...others} />);
}

export default Component;
