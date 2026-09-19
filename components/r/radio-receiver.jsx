import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w_s19rzwj.css';
import '../../css/p/p91u5peyy.css';
import '../../css/k/kkh7sievk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="w_s19rzwj"/><path class="p91u5peyy"/><path class="kkh7sievk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radio-receiver"} {...others} />);
}

export default Component;
