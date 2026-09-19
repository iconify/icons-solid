import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u30nek7ul.css';
import '../../css/g/grfp3vt9i.css';
import '../../css/y/ybvlt96vk.css';
import '../../css/q/qr2ys-55b.css';
import '../../css/q/q1qt4x1gb.css';
import '../../css/a/ac3fwosdn.css';
import '../../css/u/u11r70bjs.css';
import '../../css/i/ijyd8j7qo.css';
import '../../css/v/vrf1ej0us.css';
import '../../css/f/f_jm0xg_b.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="u30nek7ul"/><path class="grfp3vt9i"/><path class="ybvlt96vk"/><path class="qr2ys-55b"/><path class="q1qt4x1gb"/><path class="ac3fwosdn"/><path class="u11r70bjs"/><path class="ijyd8j7qo"/><path class="vrf1ej0us"/><path class="f_jm0xg_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:spinner"} {...others} />);
}

export default Component;
