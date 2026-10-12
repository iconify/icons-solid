import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ey2tz9b1s.css';
import '../../css/r/r6w5babud.css';
import '../../css/o/oh8wxob5u.css';
import '../../css/g/gomqhob-z.css';
import '../../css/x/x3mvkgo-q.css';
import '../../css/a/ab1z40bec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ey2tz9b1s"/><path class="r6w5babud"/><path class="oh8wxob5u"/><path class="gomqhob-z"/><path class="x3mvkgo-q"/><path class="ab1z40bec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dove-leaf"} {...others} />);
}

export default Component;
