import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4u8pbwjc.css';
import '../../css/a/atiyfgbwu.css';
import '../../css/p/p1l1mibxh.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/g/g25jkbcju.css';
import '../../css/z/zc5vmwzag.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="x4u8pbwjc"><circle class="atiyfgbwu"/><path class="p1l1mibxh"/></g><g class="x8poo_bjf"><circle class="atiyfgbwu"/><path class="g25jkbcju"/><path class="zc5vmwzag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-fencing"} {...others} />);
}

export default Component;
