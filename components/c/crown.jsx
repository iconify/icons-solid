import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvprdf-gx.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sji0hi3xi.css';
import '../../css/t/ti9n_7baw.css';
import '../../css/b/bx8xcygpu.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a-wjjdb-q.css';
import '../../css/v/v-orwaczn.css';
import '../../css/d/d60_xlxfb.css';
import '../../css/i/izwgjwgsi.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGAk5mNxGi" class="uvprdf-gx"/></defs><g class="t_2lkqbxb"><path class="sji0hi3xi wm-shadow"/><path class="ti9n_7baw"/><path class="bx8xcygpu"/><use href="#SVGAk5mNxGi" class="d2kvgvbvc"/><path class="a-wjjdb-q"/><use href="#SVGAk5mNxGi" class="d2kvgvbvc"/><path class="v-orwaczn"/><path class="d60_xlxfb wm-shine"/><path class="izwgjwgsi wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:crown"} {...others} />);
}

export default Component;
