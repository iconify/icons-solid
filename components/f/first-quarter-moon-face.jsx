import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awq076brg.css';
import '../../css/i/iu1267byo.css';
import '../../css/v/v37o3sb4e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="awq076brg"/><path class="iu1267byo"/><path class="v37o3sb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:first-quarter-moon-face"} {...others} />);
}

export default Component;
