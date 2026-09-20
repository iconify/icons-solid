import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/e/e6n6afp3s.css';
import '../../css/k/kv8sd7f3x.css';
import '../../css/q/qptgot1uw.css';
import '../../css/m/m9_ppdbdo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path class="e6n6afp3s"/><path class="kv8sd7f3x"/><path class="qptgot1uw"/><path class="m9_ppdbdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:yin-yang-duo"} {...others} />);
}

export default Component;
