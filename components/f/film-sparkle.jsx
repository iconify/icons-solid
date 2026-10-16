import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h872etvtl.css';
import '../../css/d/di5khpb4x.css';
import '../../css/x/x4h1atbqm.css';
import '../../css/k/kd1qlvbsr.css';
import '../../css/i/i19ohz5-h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h872etvtl"/><path class="di5khpb4x"/><path class="x4h1atbqm"/><path class="kd1qlvbsr"/><path class="i19ohz5-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film-sparkle"} {...others} />);
}

export default Component;
