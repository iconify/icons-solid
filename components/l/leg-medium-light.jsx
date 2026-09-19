import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j62qdlbdx.css';
import '../../css/e/etqgc7zzd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="j62qdlbdx"/><path class="etqgc7zzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:leg-medium-light"} {...others} />);
}

export default Component;
