import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dw2x-fupm.css';
import '../../css/d/dasjv602b.css';
import '../../css/g/g86yg3b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dw2x-fupm"/><path class="dasjv602b"/><path class="g86yg3b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-out"} {...others} />);
}

export default Component;
