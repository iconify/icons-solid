import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/ip1d06bnb.css';
import '../../css/q/qu-b9rbxz.css';
import '../../css/b/b-lizjexj.css';
import '../../css/x/xe5-y2rls.css';
import '../../css/r/rolxefcrq.css';
import '../../css/w/wifohwbpi.css';
import '../../css/s/sonzxq8xh.css';
import '../../css/s/shjxm9bkg.css';
import '../../css/h/hqx55gqow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ip1d06bnb wm-shadow"/><path class="qu-b9rbxz"/><path class="b-lizjexj"/><path class="xe5-y2rls"/><path class="rolxefcrq"/><path class="wifohwbpi"/><path class="sonzxq8xh"/><path class="shjxm9bkg wm-shine"/><path class="hqx55gqow wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:cat"} {...others} />);
}

export default Component;
