import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qzoxjvbpp.css';
import '../../css/i/il2tw3xaj.css';
import '../../css/z/zvoef-b_j.css';
import '../../css/f/fhm032boq.css';
import '../../css/y/ysfk4zjxo.css';
import '../../css/o/ocloi6rqa.css';
import '../../css/o/o5o4zqbyr.css';
import '../../css/d/dafglku_s.css';
import '../../css/w/w6y7kbbwn.css';
import '../../css/k/k4lipnbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="qzoxjvbpp wm-shadow"/><path class="il2tw3xaj"/><path class="zvoef-b_j"/><path class="fhm032boq"/><path class="ysfk4zjxo"/><path class="ocloi6rqa"/><path class="o5o4zqbyr"/><path class="dafglku_s wm-shine"/><path class="w6y7kbbwn wm-shine"/><path class="k4lipnbqk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-woman-braids"} {...others} />);
}

export default Component;
