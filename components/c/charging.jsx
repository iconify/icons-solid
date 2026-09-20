import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hkx7lc1je.css';
import '../../css/x/xf7a9pb-s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hkx7lc1je"/><path class="xf7a9pb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:charging"} {...others} />);
}

export default Component;
