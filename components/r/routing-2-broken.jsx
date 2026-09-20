import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hwglx00ld.css';
import '../../css/o/ob4yjvgmw.css';
import '../../css/a/ahcst4d1u.css';
import '../../css/j/jwqfwqhfo.css';
import '../../css/s/s4y0i048y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hwglx00ld"/><path class="ob4yjvgmw"/><path class="ahcst4d1u"/><path class="jwqfwqhfo"/><path class="s4y0i048y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:routing-2-broken"} {...others} />);
}

export default Component;
