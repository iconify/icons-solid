import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtk6izbcm.css';
import '../../css/f/fpzub6a5l.css';
import '../../css/g/gioh9jbjj.css';
import '../../css/l/ltsbsuq_l.css';
import '../../css/n/nnxc3dbrb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="gtk6izbcm"/><path class="fpzub6a5l"/><path class="gioh9jbjj"/><path class="ltsbsuq_l"/><path class="nnxc3dbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pound-banknote"} {...others} />);
}

export default Component;
