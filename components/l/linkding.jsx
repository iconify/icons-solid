import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9w03ac2i.css';
import '../../css/o/os3vnyi4f.css';
import '../../css/y/y1vbmsb9w.css';
import '../../css/w/wv0c5jsho.css';
import '../../css/n/n018-r6ah.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="r9w03ac2i"><circle class="os3vnyi4f"/><g class="y1vbmsb9w"><path class="wv0c5jsho"/><path class="n018-r6ah"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:linkding"} {...others} />);
}

export default Component;
