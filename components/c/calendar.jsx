import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6f6n8r8g.css';
import '../../css/f/fbq_esbeu.css';
import '../../css/i/ia4tklbjm.css';
import '../../css/s/sue_o3bci.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a6f6n8r8g"/><path class="fbq_esbeu"/><path class="ia4tklbjm"/><path class="sue_o3bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:calendar"} {...others} />);
}

export default Component;
