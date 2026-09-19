import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pychm_b_c.css';
import '../../css/q/q6jcelbpp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="pychm_b_c"/><path class="q6jcelbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bela"} {...others} />);
}

export default Component;
