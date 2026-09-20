import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi015tbty.css';
import '../../css/u/u50yvab1y.css';
import '../../css/e/erii6lbpv.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';
import '../../css/u/ulqv-3scp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xi015tbty"/><circle class="u50yvab1y"/><path class="erii6lbpv"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><path class="ulqv-3scp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:waxing-crescent-moon"} {...others} />);
}

export default Component;
