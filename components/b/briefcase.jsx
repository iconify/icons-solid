import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7uv99btm.css';
import '../../css/q/qjd0nrblb.css';
import '../../css/v/vyste6pai.css';
import '../../css/w/w3p7knb-q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e7uv99btm"/><path class="qjd0nrblb"/><path class="vyste6pai"/><path class="w3p7knb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:briefcase"} {...others} />);
}

export default Component;
