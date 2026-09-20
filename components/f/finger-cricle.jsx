import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bggl5sb2g.css';
import '../../css/h/hkzeubbqo.css';
import '../../css/q/qkx_1d5id.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bggl5sb2g"/><path class="hkzeubbqo"/><path class="qkx_1d5id"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:finger-cricle"} {...others} />);
}

export default Component;
