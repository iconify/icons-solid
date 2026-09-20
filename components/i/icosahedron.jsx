import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rv57m5btj.css';
import '../../css/m/m9qep6biy.css';
import '../../css/l/l70hpib7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rv57m5btj"/><path class="m9qep6biy"/><path class="l70hpib7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:icosahedron"} {...others} />);
}

export default Component;
