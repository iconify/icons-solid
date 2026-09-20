import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vhdv1pb5z.css';
import '../../css/b/bmq3j5bvu.css';
import '../../css/c/ckfdn2b0h.css';
import '../../css/m/mpmrmkbir.css';
import '../../css/u/ud4hp3bzp.css';
import '../../css/u/u8qm00b8u.css';
import '../../css/r/rdtuagbfq.css';
import '../../css/b/byc3gwwem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vhdv1pb5z"/><path class="bmq3j5bvu"/><path class="ckfdn2b0h"/><path class="mpmrmkbir"/><path class="ud4hp3bzp"/><path class="u8qm00b8u"/><path class="rdtuagbfq"/><path class="byc3gwwem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:water-fountain-jet"} {...others} />);
}

export default Component;
