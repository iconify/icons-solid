import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6rxl7-rj.css';
import '../../css/e/eanr4rsxn.css';
import '../../css/n/nnvi4slph.css';
import '../../css/z/zseb28bor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z6rxl7-rj"/><path class="eanr4rsxn"/><path class="nnvi4slph"/><circle transform="rotate(90 12 12.91)" class="zseb28bor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:camera-flash"} {...others} />);
}

export default Component;
