import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6n2s7btu.css';
import '../../css/y/y0ima4i8y.css';
import '../../css/y/yi_45ddob.css';
import '../../css/a/asi2twp_g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h6n2s7btu"/><path class="y0ima4i8y"/><path class="yi_45ddob"/><path class="asi2twp_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pig-face"} {...others} />);
}

export default Component;
