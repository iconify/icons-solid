import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yivttkrvg.css';
import '../../css/r/r5gn-6rwd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="yivttkrvg"/><path class="r5gn-6rwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:browser-dashboard"} {...others} />);
}

export default Component;
