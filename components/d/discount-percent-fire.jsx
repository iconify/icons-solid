import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w196yj2-i.css';
import '../../css/c/c5m0wxbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w196yj2-i"/><path class="c5m0wxbcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:discount-percent-fire"} {...others} />);
}

export default Component;
