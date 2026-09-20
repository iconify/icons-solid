import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqv1gomtd.css';
import '../../css/t/t0j7vybue.css';
import '../../css/a/aqe47bbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="rqv1gomtd"/><path clip-rule="evenodd" class="t0j7vybue"/><path class="aqe47bbrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bank"} {...others} />);
}

export default Component;
