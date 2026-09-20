import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spo4lsrxb.css';
import '../../css/q/qzz1y5j1i.css';
import '../../css/m/mv-pxdb7h.css';
import '../../css/d/dh-0v0bfa.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="spo4lsrxb"/><path class="qzz1y5j1i"/><path class="mv-pxdb7h"/><path class="dh-0v0bfa"/><path class="wf89k6buf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-square-line-duotone"} {...others} />);
}

export default Component;
