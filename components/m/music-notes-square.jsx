import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x34ulpd6c.css';
import '../../css/r/r1p2ovmti.css';
import '../../css/y/yyoig7bnu.css';
import '../../css/z/zp8fjxjrj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x34ulpd6c"/><path class="r1p2ovmti"/><path class="yyoig7bnu"/><rect transform="matrix(0 -1 -1 0 21.4 21.4)" class="zp8fjxjrj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:music-notes-square"} {...others} />);
}

export default Component;
