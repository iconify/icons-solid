import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfigglbgc.css';
import '../../css/t/tz2b5ybiv.css';
import '../../css/y/y6zw_jfcu.css';
import '../../css/f/fqh1wib2y.css';
import '../../css/b/ba-78iwzu.css';
import '../../css/r/r3psn0b0k.css';
import '../../css/k/k1ftfsbuy.css';
import '../../css/q/qmsl31qks.css';
import '../../css/l/l0t2gzjfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vfigglbgc"/><path class="tz2b5ybiv"/><path class="y6zw_jfcu"/><path class="fqh1wib2y"/><path class="ba-78iwzu"/><path class="r3psn0b0k"/><path class="k1ftfsbuy"/><path class="qmsl31qks"/><path class="l0t2gzjfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:fatherchristmas"} {...others} />);
}

export default Component;
