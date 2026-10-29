import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs7gt7bbo.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/od1oc9vjp.css';
import '../../css/p/p5cd1habp.css';
import '../../css/r/rnym_mb_x.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/avltusb2y.css';
import '../../css/j/janwcg4bi.css';
import '../../css/t/tn-cuebxc.css';
import '../../css/z/zpbwaab-r.css';
import '../../css/r/red23pu3w.css';
import '../../css/p/po900rbdh.css';
import '../../css/d/d6h5xv1-k.css';
import '../../css/o/oo4hotbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGzlnmyezk" class="bs7gt7bbo"/></defs><g class="t_2lkqbxb"><path class="od1oc9vjp wm-shadow"/><path class="p5cd1habp"/><path class="rnym_mb_x"/><use href="#SVGzlnmyezk" class="d2kvgvbvc"/><path class="avltusb2y"/><use href="#SVGzlnmyezk" class="d2kvgvbvc"/><path class="janwcg4bi"/><path class="tn-cuebxc"/><path class="zpbwaab-r"/><path class="red23pu3w"/><path class="po900rbdh wm-s"/><path class="d6h5xv1-k wm-s"/><path class="oo4hotbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:rakhi"} {...others} />);
}

export default Component;
