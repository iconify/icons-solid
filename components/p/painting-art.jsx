import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ew-6i_b8i.css';
import '../../css/j/juu81ymdv.css';
import '../../css/e/eugzhgbgo.css';
import '../../css/g/gdb003btj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ew-6i_b8i"/><path clip-rule="evenodd" class="juu81ymdv"/><path class="eugzhgbgo"/><path class="gdb003btj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:painting-art"} {...others} />);
}

export default Component;
