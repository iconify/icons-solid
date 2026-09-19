import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9xiawb3b.css';
import '../../css/t/tkzhsyb5o.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h9xiawb3b"/><path clip-rule="evenodd" class="tkzhsyb5o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:star-half-1-bold"} {...others} />);
}

export default Component;
