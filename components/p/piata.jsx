import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbqoctb2m.css';
import '../../css/p/pmwftgbrp.css';
import '../../css/b/bz-gxvh-i.css';

const viewBox = {"width":32,"height":33};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVG4zwUPcCA)" class="cuyn6tgcc"><path class="gbqoctb2m"/><path class="pmwftgbrp"/></g><defs><clipPath id="SVG4zwUPcCA"><path class="bz-gxvh-i"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:piata"} {...others} />);
}

export default Component;
