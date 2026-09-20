import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/go-v7hs9h.css';
import '../../css/k/klmre0b_i.css';
import '../../css/w/wf-ttibhp.css';
import '../../css/y/yf45qdbgu.css';
import '../../css/k/ksuzjwbzr.css';
import '../../css/f/fkiqv5b7m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="go-v7hs9h"/><path class="klmre0b_i"/><path class="wf-ttibhp"/><path class="yf45qdbgu"/><path class="ksuzjwbzr"/><path class="fkiqv5b7m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:fast-food-french-fries"} {...others} />);
}

export default Component;
