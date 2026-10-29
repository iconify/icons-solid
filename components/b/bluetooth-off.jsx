import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b8upwpbnt.css';
import '../../css/l/l1hvyibcp.css';
import '../../css/g/g5whpccff.css';
import '../../css/t/taf_kfbyc.css';
import '../../css/f/f6rbdrn0e.css';
import '../../css/a/a9pd-hb9z.css';
import '../../css/g/ghw1ejbqe.css';
import '../../css/v/vn9n4obyk.css';
import '../../css/m/mamj31z5h.css';
import '../../css/s/sw__cecuh.css';
import '../../css/z/z4adih65n.css';
import '../../css/a/ang8pkbsr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="b8upwpbnt wm-shadow"/><path class="l1hvyibcp"/><path class="g5whpccff"/><path class="taf_kfbyc"/><path class="f6rbdrn0e"/><path class="a9pd-hb9z"/><path class="ghw1ejbqe"/><path class="vn9n4obyk wm-s"/><path class="mamj31z5h wm-s"/><path class="sw__cecuh wm-s"/><path class="wm-deco z4adih65n"/><path class="ang8pkbsr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:bluetooth-off"} {...others} />);
}

export default Component;
