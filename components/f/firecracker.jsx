import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npicjqb-y.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/p77sdxbvi.css';
import '../../css/i/iehrpbgfk.css';
import '../../css/d/dmc8kwdsk.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ou6fxvbyp.css';
import '../../css/y/yj07rqerx.css';
import '../../css/q/q_o7q7nhg.css';
import '../../css/f/fqm3e3a1l.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGe5LKoelD" class="npicjqb-y"/></defs><g class="t_2lkqbxb"><path class="p77sdxbvi wm-shadow"/><path class="iehrpbgfk"/><path class="dmc8kwdsk"/><use href="#SVGe5LKoelD" class="d2kvgvbvc"/><path class="ou6fxvbyp"/><use href="#SVGe5LKoelD" class="d2kvgvbvc"/><path class="yj07rqerx"/><path class="q_o7q7nhg wm-shine"/><path class="fqm3e3a1l wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:firecracker"} {...others} />);
}

export default Component;
