import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xeozer8ha.css';
import '../../css/s/s1y-g8tuk.css';
import '../../css/n/n_v5pt0yg.css';
import '../../css/v/viqt-5hbo.css';
import '../../css/f/f0le9qbnm.css';
import '../../css/e/er7lcv08l.css';
import '../../css/h/hajkxglqq.css';
import '../../css/j/jrl4aqbzj.css';
import '../../css/n/n41_8wips.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xeozer8ha"/><path class="s1y-g8tuk"/><path class="n_v5pt0yg"/><circle class="viqt-5hbo"/><path class="f0le9qbnm"/><path class="er7lcv08l"/><path class="hajkxglqq"/><circle class="jrl4aqbzj"/><path class="n41_8wips"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:camera"} {...others} />);
}

export default Component;
