import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqa97brp.css';
import '../../css/e/exi1w_byb.css';
import '../../css/v/vr081lbfs.css';
import '../../css/a/ayozhrb1c.css';
import '../../css/x/xuu7xjk7x.css';
import '../../css/d/duyjbxbub.css';
import '../../css/b/bm4a6ibol.css';
import '../../css/n/nur8nvbru.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cnqa97brp"/><ellipse class="exi1w_byb"/><path class="vr081lbfs"/><path class="ayozhrb1c"/><path class="xuu7xjk7x"/><path class="duyjbxbub"/><path class="bm4a6ibol"/><path class="nur8nvbru"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-northern-mariana-islands"} {...others} />);
}

export default Component;
