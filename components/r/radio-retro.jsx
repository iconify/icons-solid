import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qy376nbqu.css';
import '../../css/c/cqn7qhbtn.css';
import '../../css/d/dodex1-eg.css';
import '../../css/w/wedvm7bgt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qy376nbqu"/><path class="cqn7qhbtn"/><path class="dodex1-eg"/><path class="wedvm7bgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:radio-retro"} {...others} />);
}

export default Component;
