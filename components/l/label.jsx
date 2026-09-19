import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv62pmbfb.css';
import '../../css/t/ta90ekbqr.css';
import '../../css/v/vhqenwbef.css';
import '../../css/u/unrbvebfg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hv62pmbfb"/><path class="ta90ekbqr"/><path class="vhqenwbef"/><path class="unrbvebfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:label"} {...others} />);
}

export default Component;
