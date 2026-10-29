import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl1afpyne.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/le842z_oj.css';
import '../../css/h/hl4127zjz.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rln-ht3td.css';
import '../../css/e/ec28bcfrv.css';
import '../../css/q/qwex3msdt.css';
import '../../css/y/ytqn3q3es.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGXyKHTbLl" class="zl1afpyne"/></defs><g class="t_2lkqbxb"><path class="le842z_oj wm-shadow"/><path class="hl4127zjz"/><use href="#SVGXyKHTbLl" class="d2kvgvbvc"/><path class="rln-ht3td"/><use href="#SVGXyKHTbLl" class="d2kvgvbvc"/><path class="ec28bcfrv"/><path class="qwex3msdt wm-shine"/><path class="wm-deco ytqn3q3es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:fast-forward"} {...others} />);
}

export default Component;
