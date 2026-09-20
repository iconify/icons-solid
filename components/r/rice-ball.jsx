import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjodp-bjm.css';
import '../../css/y/ylo97-b1s.css';
import '../../css/z/zqe_q1umg.css';
import '../../css/e/eprqftj5s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qjodp-bjm"/><path class="ylo97-b1s"/><path class="zqe_q1umg"/><path class="eprqftj5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:rice-ball"} {...others} />);
}

export default Component;
