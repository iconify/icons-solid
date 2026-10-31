import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udb9p5vlu.css';
import '../../css/k/kgtwb3bur.css';
import '../../css/u/uaerz-6iu.css';
import '../../css/l/llgknward.css';
import '../../css/k/kpjxkmbzd.css';
import '../../css/h/hr-javzdk.css';
import '../../css/z/zz_zghb1i.css';
import '../../css/y/yzokykbeq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="udb9p5vlu"/><path class="kgtwb3bur"/><path class="uaerz-6iu"/><path class="llgknward"/><path class="kpjxkmbzd"/><path class="hr-javzdk"/><path class="zz_zghb1i"/><path class="yzokykbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:pasta"} {...others} />);
}

export default Component;
