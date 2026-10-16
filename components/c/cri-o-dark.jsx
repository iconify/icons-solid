import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9_awgbuo.css';
import '../../css/b/bs4b6zbqx.css';
import '../../css/i/ikg91lbvs.css';
import '../../css/d/d9cmlutdo.css';
import '../../css/j/j2lc92b5l.css';
import '../../css/o/onos5bcao.css';

const viewBox = {"width":370.5,"height":362,"left":-5.38,"top":-1.13};
const content = `<path class="f9_awgbuo"/><path class="bs4b6zbqx"/><path class="ikg91lbvs"/><path class="d9cmlutdo"/><path class="j2lc92b5l"/><path class="onos5bcao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cri-o-dark"} {...others} />);
}

export default Component;
