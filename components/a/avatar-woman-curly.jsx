import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o28fnjbye.css';
import '../../css/v/vs0s7wwuk.css';
import '../../css/k/kpoluktpw.css';
import '../../css/l/lzsl4qbrj.css';
import '../../css/c/c2y9hcbhp.css';
import '../../css/k/k1li0y6dk.css';
import '../../css/g/g9kviv7fb.css';
import '../../css/d/dafglku_s.css';
import '../../css/b/b64sm3o-j.css';
import '../../css/x/x68b7obap.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="o28fnjbye wm-shadow"/><path class="vs0s7wwuk"/><path class="kpoluktpw"/><path class="lzsl4qbrj"/><path class="c2y9hcbhp"/><path class="k1li0y6dk"/><path class="g9kviv7fb"/><path class="dafglku_s wm-shine"/><path class="b64sm3o-j wm-shine"/><path class="wm-deco x68b7obap"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:avatar-woman-curly"} {...others} />);
}

export default Component;
