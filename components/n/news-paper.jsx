import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ug8b27b4f.css';
import '../../css/f/fcy-udb6j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ug8b27b4f"/><path class="fcy-udb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:news-paper"} {...others} />);
}

export default Component;
