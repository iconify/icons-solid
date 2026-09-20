import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g44uy_bjc.css';
import '../../css/k/kjgm23o3b.css';
import '../../css/m/maptswbqy.css';
import '../../css/p/p599o3h7x.css';
import '../../css/t/t1tln_bqb.css';
import '../../css/c/cx0g5kprr.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="g44uy_bjc"/><circle class="kjgm23o3b"/><path class="maptswbqy"/><circle class="p599o3h7x"/><path class="t1tln_bqb"/><path class="cx0g5kprr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:scales"} {...others} />);
}

export default Component;
