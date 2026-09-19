import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w83ngbbji.css';
import '../../css/p/pg07_h8-j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w83ngbbji"/><path class="pg07_h8-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:maple-leaf"} {...others} />);
}

export default Component;
