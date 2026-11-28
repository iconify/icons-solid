import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g_h41ybvr.css';
import '../../css/h/huz-2q25e.css';
import '../../css/t/tymgqqbzp.css';
import '../../css/l/liicipyjo.css';
import '../../css/g/g58ztrpiw.css';
import '../../css/y/y4kv_himn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g_h41ybvr"/><path class="huz-2q25e"/><path class="tymgqqbzp"/><path class="liicipyjo"/><path class="g58ztrpiw"/><path class="y4kv_himn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:subscription"} {...others} />);
}

export default Component;
