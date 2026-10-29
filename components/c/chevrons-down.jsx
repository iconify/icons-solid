import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/h/h503bgfiu.css';
import '../../css/n/n0_e-dbzm.css';
import '../../css/z/z_0qjmkae.css';
import '../../css/y/y0swl1beo.css';
import '../../css/i/igxo-ubnw.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="h503bgfiu wm-shadow"/><path class="n0_e-dbzm"/><path class="z_0qjmkae"/><path class="y0swl1beo"/><path class="igxo-ubnw wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:chevrons-down"} {...others} />);
}

export default Component;
