import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/do8zrkbea.css';
import '../../css/p/p85xtbbof.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="do8zrkbea"/><path class="p85xtbbof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:hexagram"} {...others} />);
}

export default Component;
