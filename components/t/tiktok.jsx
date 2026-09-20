import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j0qm-ob5o.css';
import '../../css/y/yivttkrvg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="j0qm-ob5o"/><path class="yivttkrvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:tiktok"} {...others} />);
}

export default Component;
