import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/hn65y5bmf.css';
import '../../css/x/xk103lbbj.css';
import '../../css/g/g37_o6b2o.css';
import '../../css/l/l4jj-2mxt.css';
import '../../css/k/k6q-w8mvx.css';
import '../../css/w/w5xwq3_4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="hn65y5bmf wm-shadow"/><path class="xk103lbbj"/><path class="g37_o6b2o"/><path class="l4jj-2mxt"/><path class="k6q-w8mvx wm-shine"/><path class="w5xwq3_4k wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-up-right"} {...others} />);
}

export default Component;
