import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l9pg-p_yw.css';
import '../../css/d/dwbgat27t.css';
import '../../css/c/c2arwhbkf.css';
import '../../css/e/ejsb67fan.css';
import '../../css/b/bgz7ydbgf.css';
import '../../css/v/v43vmebgh.css';
import '../../css/i/ibqif-caj.css';
import '../../css/b/bp24ecb_f.css';
import '../../css/q/qef_sobyj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l9pg-p_yw wm-shadow"/><path class="dwbgat27t"/><path class="c2arwhbkf"/><path class="ejsb67fan"/><path class="bgz7ydbgf"/><path class="v43vmebgh"/><path class="ibqif-caj"/><path class="bp24ecb_f wm-shine"/><path class="qef_sobyj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:folder-tree"} {...others} />);
}

export default Component;
