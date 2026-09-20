import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsseu6bxu.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h_ixmbo2d.css';
import '../../css/q/qy2-a7bwd.css';

const viewBox = {"width":14,"height":14};
const content = `<defs><path id="SVG7oALDeSR" class="rsseu6bxu"/></defs><g class="ft5dv1b6b"><use href="#SVG7oALDeSR" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVG7oALDeSR"/><path class="h_ixmbo2d"/><path clip-rule="evenodd" class="qy2-a7bwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bow-flat"} {...others} />);
}

export default Component;
