import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yovn8d77q.css';
import '../../css/o/opxvyhbqz.css';
import '../../css/i/ixg63_bcb.css';
import '../../css/u/umjelqb9d.css';
import '../../css/l/lkm6-6boh.css';
import '../../css/d/dr_eaubxu.css';
import '../../css/u/urydj00hn.css';
import '../../css/e/e5fbn_kkl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yovn8d77q"/><path class="opxvyhbqz"/><path class="ixg63_bcb"/><path class="umjelqb9d"/><path class="lkm6-6boh"/><path class="dr_eaubxu"/><path class="urydj00hn"/><path class="e5fbn_kkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bride-with-veil-light-skin-tone"} {...others} />);
}

export default Component;
