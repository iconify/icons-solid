import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pc6s9ybxj.css';
import '../../css/v/vraeg7yhw.css';
import '../../css/w/wql1gz6nu.css';
import '../../css/h/h2n9vy1ul.css';
import '../../css/z/zrmro0bha.css';
import '../../css/n/nfzkljb_b.css';
import '../../css/z/z9edyq0iv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pc6s9ybxj"/><path class="vraeg7yhw"/><path class="wql1gz6nu"/><path class="h2n9vy1ul"/><path class="zrmro0bha"/><path class="nfzkljb_b"/><path class="z9edyq0iv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:virtual-machine-3"} {...others} />);
}

export default Component;
