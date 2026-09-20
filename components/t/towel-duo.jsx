import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/f/fcmg1cbyd.css';
import '../../css/q/qq94dqkiv.css';
import '../../css/f/f-c_6tbpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="fcmg1cbyd"/><path class="qq94dqkiv"/><path class="f-c_6tbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:towel-duo"} {...others} />);
}

export default Component;
