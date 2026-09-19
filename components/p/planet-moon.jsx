import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8eoimbpp.css';
import '../../css/f/fycg7vbuo.css';
import '../../css/d/d4u2wrb4d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y8eoimbpp"/><path clip-rule="evenodd" class="fycg7vbuo"/><circle class="d4u2wrb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:planet-moon"} {...others} />);
}

export default Component;
