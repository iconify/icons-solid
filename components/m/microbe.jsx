import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbu0j497j.css';
import '../../css/q/qd7txsbcd.css';
import '../../css/g/g7s0w3a6m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="qbu0j497j"/><path class="qd7txsbcd"/><path class="g7s0w3a6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:microbe"} {...others} />);
}

export default Component;
