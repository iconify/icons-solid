import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lkfp6obbh.css';
import '../../css/b/b_gdiub7l.css';
import '../../css/h/htlk_kphf.css';
import '../../css/q/qh-5srbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lkfp6obbh"/><path class="b_gdiub7l"/><path class="htlk_kphf"/><path class="qh-5srbvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:stamp"} {...others} />);
}

export default Component;
