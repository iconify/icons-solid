import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evlh4v6mo.css';
import '../../css/i/ixwphl9ao.css';
import '../../css/l/l4-wf0bph.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="evlh4v6mo"/><path class="ixwphl9ao"/><path class="l4-wf0bph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:pill"} {...others} />);
}

export default Component;
