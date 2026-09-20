import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t7henqb8t.css';
import '../../css/i/i4uu4rbhf.css';
import '../../css/h/hfygp1eni.css';
import '../../css/o/o6q2kvbfj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="t7henqb8t"/><path class="i4uu4rbhf"/><path class="hfygp1eni"/><path class="o6q2kvbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:toilet-women"} {...others} />);
}

export default Component;
