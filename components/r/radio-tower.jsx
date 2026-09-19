import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f08q9dl9p.css';
import '../../css/k/kg5bfdcux.css';
import '../../css/s/s8od9eyyg.css';
import '../../css/d/dgzh063rl.css';
import '../../css/z/zdx9ddceq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="f08q9dl9p"/><circle class="f08q9dl9p"/><path class="kg5bfdcux"/><path class="s8od9eyyg"/><path class="dgzh063rl"/><path class="zdx9ddceq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:radio-tower"} {...others} />);
}

export default Component;
