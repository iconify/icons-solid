import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwcz2bc9e.css';
import '../../css/p/ppvq34fgr.css';
import '../../css/r/rfmxojb9w.css';
import '../../css/o/oez8gzbxd.css';
import '../../css/q/qbgl7c1ia.css';
import '../../css/r/rfzu-sjnr.css';
import '../../css/i/isc0hbc0g.css';
import '../../css/v/vudlxhv6m.css';
import '../../css/t/tf0idgbjt.css';
import '../../css/j/jemd9nb5c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hwcz2bc9e"/><path class="ppvq34fgr"/><path class="rfmxojb9w"/><path class="oez8gzbxd"/><path class="qbgl7c1ia"/><path class="rfzu-sjnr"/><path class="isc0hbc0g"/><path class="vudlxhv6m"/><path class="tf0idgbjt"/><path class="jemd9nb5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:boy-medium"} {...others} />);
}

export default Component;
