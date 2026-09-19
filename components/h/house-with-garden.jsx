import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ie9tjobji.css';
import '../../css/b/bd-ms75ny.css';

const viewBox = {"width":32,"height":32};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ie9tjobji"/><path class="bd-ms75ny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:house-with-garden"} {...others} />);
}

export default Component;
