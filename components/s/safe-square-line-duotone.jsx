import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/i/ik06bsbra.css';
import '../../css/p/p39idcbfe.css';
import '../../css/w/wto5qfb3t.css';
import '../../css/d/doa2mfb8h.css';
import '../../css/r/ro6cy7xlh.css';
import '../../css/c/ca0rzv6fc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="ik06bsbra"/><path class="p39idcbfe"/><path class="wto5qfb3t"/><path class="doa2mfb8h"/><path class="ro6cy7xlh"/><path class="ca0rzv6fc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:safe-square-line-duotone"} {...others} />);
}

export default Component;
