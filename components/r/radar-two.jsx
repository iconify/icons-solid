import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pohjlbb7n.css';
import '../../css/d/day4s8irq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="pohjlbb7n"/><path clip-rule="evenodd" class="day4s8irq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:radar-two"} {...others} />);
}

export default Component;
