import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uotk91dww.css';
import '../../css/j/jo17u180x.css';
import '../../css/i/ib318w12k.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="n1lsf0bnc"><circle class="uotk91dww"/><circle class="jo17u180x"/><circle class="ib318w12k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:menu-vertical"} {...others} />);
}

export default Component;
