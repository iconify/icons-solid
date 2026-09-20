import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-1pftcsp.css';
import '../../css/i/i-i97hbkm.css';
import '../../css/g/g9b9hnbpq.css';
import '../../css/o/o0cyujb8t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u-1pftcsp"/><path class="i-i97hbkm"/><path class="g9b9hnbpq"/><path class="o0cyujb8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:smiley-sparks"} {...others} />);
}

export default Component;
