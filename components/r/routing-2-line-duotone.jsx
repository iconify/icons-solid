import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwglx00ld.css';
import '../../css/o/ob4yjvgmw.css';
import '../../css/a/apesrwr1t.css';
import '../../css/f/fqjn5jbwe.css';
import '../../css/i/it9zzhbms.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hwglx00ld"/><path class="ob4yjvgmw"/><path class="apesrwr1t"/><path class="fqjn5jbwe"/><path class="it9zzhbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-line-duotone"} {...others} />);
}

export default Component;
