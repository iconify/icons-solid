import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k-x22tlcb.css';
import '../../css/c/cgg-zqb4i.css';
import '../../css/f/ffgm8df8b.css';
import '../../css/t/t41qtibro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="k-x22tlcb"/><path class="cgg-zqb4i"/><path class="ffgm8df8b"/><path class="t41qtibro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chair-05"} {...others} />);
}

export default Component;
