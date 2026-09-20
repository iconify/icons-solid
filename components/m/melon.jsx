import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfgg0pk5w.css';
import '../../css/y/yj5hk5kpg.css';
import '../../css/b/bjb_7do8j.css';
import '../../css/y/y_s09_m7v.css';
import '../../css/f/fw5cihp6b.css';
import '../../css/k/kyky5eblg.css';
import '../../css/b/b8jxu9ybb.css';
import '../../css/y/yd5fwhbdu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xfgg0pk5w"/><path class="yj5hk5kpg"/><path class="bjb_7do8j"/><path class="y_s09_m7v"/><path class="fw5cihp6b"/><path class="kyky5eblg"/><path class="b8jxu9ybb"/><circle class="yd5fwhbdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:melon"} {...others} />);
}

export default Component;
