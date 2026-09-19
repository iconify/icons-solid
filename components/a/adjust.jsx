import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7rof_xzg.css';
import '../../css/r/ry4xkfx6l.css';
import '../../css/i/ijc812t3e.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="h7rof_xzg"/><path clip-rule="evenodd" class="ry4xkfx6l"/><path clip-rule="evenodd" class="ijc812t3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:adjust"} {...others} />);
}

export default Component;
