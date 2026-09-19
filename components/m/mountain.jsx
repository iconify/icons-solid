import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cpkvnaclu.css';
import '../../css/a/ancp26bpz.css';
import '../../css/r/r5hk37bdw.css';
import '../../css/h/hb2gdxb9w.css';
import '../../css/u/ugoj8yokz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cpkvnaclu"/><path class="ancp26bpz"/><path class="r5hk37bdw"/><path class="hb2gdxb9w"/><path class="ugoj8yokz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mountain"} {...others} />);
}

export default Component;
