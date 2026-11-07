import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u50k6zbdy.css';
import '../../css/h/h1p_nyb0m.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fon80x16t.css';
import '../../css/x/xtbgsz62x.css';
import '../../css/g/gt9041bte.css';
import '../../css/t/tc89sw18l.css';
import '../../css/y/yva3si-8m.css';
import '../../css/j/j3ld0_b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u50k6zbdy"/><path class="h1p_nyb0m"/><g class="xtpeb-edw"><path class="fon80x16t"/><path class="xtbgsz62x"/><path class="gt9041bte"/><path class="tc89sw18l"/><path class="yva3si-8m"/><path class="j3ld0_b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-fracture-bold-duotone"} {...others} />);
}

export default Component;
