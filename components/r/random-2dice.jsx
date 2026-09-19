import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rtml-0jie.css';
import '../../css/k/kz230cc1j.css';
import '../../css/r/rl7bo2b5p.css';
import '../../css/a/ar54x3fwu.css';
import '../../css/j/j0jakzxip.css';
import '../../css/r/r-171sbrd.css';
import '../../css/c/cmx7xl2ry.css';
import '../../css/g/go6b0nb1w.css';
import '../../css/q/q4bir6gjx.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="rtml-0jie"/><circle class="kz230cc1j"/><circle class="rl7bo2b5p"/><circle class="ar54x3fwu"/><circle class="j0jakzxip"/><circle class="r-171sbrd"/><circle class="cmx7xl2ry"/><circle class="go6b0nb1w"/><circle class="q4bir6gjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:random-2dice"} {...others} />);
}

export default Component;
