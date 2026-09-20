import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/osuf_jq5d.css';
import '../../css/n/n1rg9dbqj.css';
import '../../css/u/u9mcuywun.css';
import '../../css/m/mmjk66e8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="osuf_jq5d"/><path class="n1rg9dbqj"/><path class="u9mcuywun"/><path class="mmjk66e8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mirror-linear"} {...others} />);
}

export default Component;
