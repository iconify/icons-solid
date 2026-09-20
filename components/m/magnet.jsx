import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7ivt4r2p.css';
import '../../css/d/dt_s_4bze.css';
import '../../css/s/sqqwh7w1i.css';
import '../../css/z/zf8v6ib3i.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/d/d39hwgbua.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/c/c-soh1bhu.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGZPEkHeQd" class="z7ivt4r2p"/></defs><path class="dt_s_4bze"/><use href="#SVGZPEkHeQd" class="sqqwh7w1i"/><path class="zf8v6ib3i"/><g class="brzn_0bpr"><path class="d39hwgbua"/><use href="#SVGZPEkHeQd" class="c-zrgpb5l"/><path class="c-soh1bhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:magnet"} {...others} />);
}

export default Component;
