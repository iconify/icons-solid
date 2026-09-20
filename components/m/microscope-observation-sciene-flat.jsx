import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ya9q_jcjh.css';
import '../../css/f/fmvi8jhxb.css';
import '../../css/u/ud80dsbih.css';
import '../../css/m/mlr4gujwd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ya9q_jcjh"/><path class="fmvi8jhxb"/><path clip-rule="evenodd" class="ud80dsbih"/><path clip-rule="evenodd" class="mlr4gujwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:microscope-observation-sciene-flat"} {...others} />);
}

export default Component;
