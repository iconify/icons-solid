import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hmv_r4v_m.css';
import '../../css/f/fsijvccwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hmv_r4v_m"/><path class="fsijvccwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:share-07"} {...others} />);
}

export default Component;
