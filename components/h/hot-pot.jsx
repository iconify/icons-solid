import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/c5ufujb1b.css';
import '../../css/v/v4hz5_bqx.css';
import '../../css/c/csfcqs-oe.css';
import '../../css/t/tiiwvac_b.css';
import '../../css/o/otunajblm.css';
import '../../css/z/z_cnjht7n.css';
import '../../css/l/lx5dnw_du.css';
import '../../css/x/xttddm5ag.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="c5ufujb1b"/><path class="v4hz5_bqx"/><path class="csfcqs-oe"/><path class="tiiwvac_b"/><path class="otunajblm"/><path class="z_cnjht7n"/><path class="lx5dnw_du"/><path class="xttddm5ag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hot-pot"} {...others} />);
}

export default Component;
