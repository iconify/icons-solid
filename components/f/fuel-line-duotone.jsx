import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yxd5kybqw.css';
import '../../css/j/j2ad96byc.css';
import '../../css/j/jhiwn9g1n.css';
import '../../css/u/uacjgs3aj.css';
import '../../css/e/ew__bm7mg.css';
import '../../css/k/kra2wmb9i.css';
import '../../css/c/c5hy1iqkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yxd5kybqw"/><path class="j2ad96byc"/><path class="jhiwn9g1n"/><path class="uacjgs3aj"/><path class="ew__bm7mg"/><path class="kra2wmb9i"/><path class="c5hy1iqkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fuel-line-duotone"} {...others} />);
}

export default Component;
