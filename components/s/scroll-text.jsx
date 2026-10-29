import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/e/efdkionbl.css';
import '../../css/k/kq_w9sbgw.css';
import '../../css/g/gvv2rt--j.css';
import '../../css/y/ypld_3oxi.css';
import '../../css/i/i41ao-fgx.css';
import '../../css/u/um2vs0vhp.css';
import '../../css/b/bqy5po3yj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="efdkionbl wm-shadow"/><path class="kq_w9sbgw"/><path class="gvv2rt--j"/><path class="ypld_3oxi"/><path class="i41ao-fgx"/><path class="um2vs0vhp wm-shine"/><path class="bqy5po3yj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:scroll-text"} {...others} />);
}

export default Component;
