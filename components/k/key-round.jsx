import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f5tatcb3m.css';
import '../../css/c/ct164mbcm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="f5tatcb3m"/><path class="ct164mbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:key-round"} {...others} />);
}

export default Component;
