import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thcjvmb9x.css';
import '../../css/l/l2ri-gbnp.css';
import '../../css/z/zkxi6bboz.css';
import '../../css/r/rz2qodbyj.css';
import '../../css/t/t2oa5nb1m.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="thcjvmb9x"><path class="l2ri-gbnp"/><path class="zkxi6bboz"/><path class="rz2qodbyj"/><path class="t2oa5nb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openrouter-dark"} {...others} />);
}

export default Component;
