import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3fsewyjy.css';
import '../../css/u/ua06rxbxi.css';
import '../../css/p/p2s7d2z8z.css';
import '../../css/o/o2ux93gjq.css';
import '../../css/p/p_m5nno_t.css';
import '../../css/l/lo2nnqyra.css';
import '../../css/g/gnxjwwhcr.css';
import '../../css/r/ro0bwabtq.css';
import '../../css/e/ecfawsb-y.css';
import '../../css/g/grxq95b4p.css';
import '../../css/z/z3pmw7a5m.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="e3fsewyjy"><path class="ua06rxbxi"/><path class="p2s7d2z8z"/><path class="o2ux93gjq"/><path class="p_m5nno_t"/></g><g class="lo2nnqyra"><path class="gnxjwwhcr"/><path class="ro0bwabtq"/><path class="ecfawsb-y"/><path class="grxq95b4p"/><path class="z3pmw7a5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spouting-whale"} {...others} />);
}

export default Component;
