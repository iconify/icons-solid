import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/j/jqg1wpbhz.css';
import '../../css/y/y8s1yox1j.css';
import '../../css/h/huoi3ky6l.css';
import '../../css/t/t2k6t0buo.css';
import '../../css/u/u-kdhybkb.css';
import '../../css/t/tcxv1qbqd.css';
import '../../css/p/pwdaeoc-i.css';
import '../../css/b/b0opclfzv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="jqg1wpbhz"/><path class="y8s1yox1j"/><path class="huoi3ky6l"/><circle class="t2k6t0buo"/><path class="u-kdhybkb"/><path class="tcxv1qbqd"/><path class="pwdaeoc-i"/><ellipse class="b0opclfzv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bot-linear"} {...others} />);
}

export default Component;
