import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8b_mqwey.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/a/axxvbbbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGigIxTbSU" class="h8b_mqwey"/></defs><g class="ft5dv1b6b"><use href="#SVGigIxTbSU"/><use href="#SVGigIxTbSU" class="p_3zmsvya"/><path class="axxvbbbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:collapsible-block"} {...others} />);
}

export default Component;
