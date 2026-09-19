import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/ww941joxp.css';
import '../../css/b/bj_b4ehoh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="ww941joxp"/><path class="bj_b4ehoh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:pivx"} {...others} />);
}

export default Component;
