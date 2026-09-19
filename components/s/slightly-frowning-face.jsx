import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/t/tzdulab6i.css';
import '../../css/d/dro2vnbmz.css';
import '../../css/f/f4vqt35pe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="tzdulab6i"/><path class="dro2vnbmz"/><path class="f4vqt35pe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:slightly-frowning-face"} {...others} />);
}

export default Component;
