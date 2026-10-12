import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dw2x-fupm.css';
import '../../css/e/e5wi7ib-h.css';
import '../../css/s/slhwxmo-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dw2x-fupm"/><path class="e5wi7ib-h"/><path class="slhwxmo-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-in"} {...others} />);
}

export default Component;
