import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jj5tbmgit.css';
import '../../css/o/o422zab0r.css';
import '../../css/j/jz8bpeblu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jj5tbmgit"/><path class="o422zab0r"/><path class="jz8bpeblu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:curling-stone"} {...others} />);
}

export default Component;
