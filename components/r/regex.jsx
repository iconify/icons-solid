import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/moy7dkevz.css';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fs1rdn3ez.css';
import '../../css/k/k0angiv3m.css';
import '../../css/c/cwo764b4y.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zeggsmbsx.css';
import '../../css/q/qksj53f2v.css';
import '../../css/t/tq3t1nqia.css';
import '../../css/l/lzycjsbzv.css';
import '../../css/g/gmwf64byv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGkB4Vwd8k" class="moy7dkevz"/></defs><g class="t_2lkqbxb"><path class="fs1rdn3ez wm-shadow"/><path class="k0angiv3m"/><path class="cwo764b4y"/><use href="#SVGkB4Vwd8k" class="d2kvgvbvc"/><path class="zeggsmbsx"/><use href="#SVGkB4Vwd8k" class="d2kvgvbvc"/><path class="qksj53f2v"/><path class="tq3t1nqia"/><path class="lzycjsbzv wm-shine"/><path class="gmwf64byv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:regex"} {...others} />);
}

export default Component;
