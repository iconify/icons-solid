import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2x0lubdy.css';
import '../../css/b/b6v50_yve.css';
import '../../css/r/royoh7bxp.css';
import '../../css/h/hpau8rbmj.css';

const viewBox = {"width":301,"height":219};
const content = `<g class="ft5dv1b6b"><path class="p2x0lubdy"/><path class="b6v50_yve"/><path class="royoh7bxp"/><path class="hpau8rbmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:il"} {...others} />);
}

export default Component;
