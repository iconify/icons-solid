import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bggh63bml.css';
import '../../css/t/t0xoyibqi.css';
import '../../css/e/egkx-6bee.css';
import '../../css/c/cu3bv91lm.css';
import '../../css/i/ib9ht21er.css';
import '../../css/x/xjb22ab_z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bggh63bml"/><path class="t0xoyibqi"/><path class="egkx-6bee"/><path class="cu3bv91lm"/><path class="ib9ht21er"/><path class="xjb22ab_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:recycling-symbol"} {...others} />);
}

export default Component;
