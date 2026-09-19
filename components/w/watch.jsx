import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_0txgq_w.css';
import '../../css/f/fbebt8bdc.css';
import '../../css/c/chwmxcbud.css';
import '../../css/u/urdzw7bud.css';
import '../../css/r/rln4xwbaf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y_0txgq_w"/><path class="fbebt8bdc"/><path class="chwmxcbud"/><path class="urdzw7bud"/><path class="rln4xwbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:watch"} {...others} />);
}

export default Component;
