import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl659uogt.css';
import '../../css/x/xi0wytc-t.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="hl659uogt"/><path class="xi0wytc-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:file-pdf"} {...others} />);
}

export default Component;
