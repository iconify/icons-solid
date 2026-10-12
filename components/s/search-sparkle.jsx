import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2nke7cer.css';
import '../../css/f/fn2kqsgce.css';
import '../../css/h/h-1f92buw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h2nke7cer"/><path class="fn2kqsgce"/><path class="h-1f92buw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:search-sparkle"} {...others} />);
}

export default Component;
