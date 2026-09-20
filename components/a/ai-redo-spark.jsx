import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vz9_bub3g.css';
import '../../css/b/beeokmb8b.css';
import '../../css/e/ei6cr30no.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="vz9_bub3g"/><path class="beeokmb8b"/><path class="ei6cr30no"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ai-redo-spark"} {...others} />);
}

export default Component;
