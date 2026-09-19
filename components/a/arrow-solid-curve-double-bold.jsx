import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a1phhubdt.css';
import '../../css/r/roilbdb6a.css';

const viewBox = {"width":80,"height":83};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a1phhubdt"/><path class="roilbdb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:arrow-solid-curve-double-bold"} {...others} />);
}

export default Component;
