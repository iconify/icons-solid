import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iz02l7bxj.css';
import '../../css/p/ptwz7cczz.css';
import '../../css/x/xohym5bkp.css';
import '../../css/c/c5_ce6b7b.css';
import '../../css/d/d7cftvo7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iz02l7bxj"/><path class="ptwz7cczz"/><path class="xohym5bkp"/><path class="c5_ce6b7b"/><path class="d7cftvo7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:rubiks-cube"} {...others} />);
}

export default Component;
