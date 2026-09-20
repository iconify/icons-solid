import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n-s28q4ug.css';
import '../../css/l/luof9lbwe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="n-s28q4ug"/><path class="luof9lbwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-gaming-spark"} {...others} />);
}

export default Component;
