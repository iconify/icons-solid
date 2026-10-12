import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zoc_stq5p.css';
import '../../css/r/rin0vjxsc.css';
import '../../css/a/a7ag7p2ad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zoc_stq5p"/><path class="rin0vjxsc"/><path class="a7ag7p2ad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ear-listen"} {...others} />);
}

export default Component;
