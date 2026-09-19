import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3p6oj-cx.css';
import '../../css/s/sfl_nubxa.css';
import '../../css/a/apo_xnwmz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n3p6oj-cx"/><path class="sfl_nubxa"/><path class="apo_xnwmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:palms-up-together-dark"} {...others} />);
}

export default Component;
