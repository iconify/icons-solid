import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zwls8d_oz.css';
import '../../css/c/c04bsynun.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="zwls8d_oz"/><path class="c04bsynun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-bend-down-right-2-arrow-bend-curve-change-direction-down-to-right"} {...others} />);
}

export default Component;
