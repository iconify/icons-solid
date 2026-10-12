import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugcw7unzv.css';
import '../../css/p/pvqjxub1k.css';
import '../../css/r/rl-u0xban.css';
import '../../css/u/u2e6epbvc.css';
import '../../css/o/oneeiz9uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ugcw7unzv"/><path class="pvqjxub1k"/><ellipse transform="rotate(90 12 3.45)" class="rl-u0xban"/><path class="u2e6epbvc"/><path class="oneeiz9uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-angel"} {...others} />);
}

export default Component;
