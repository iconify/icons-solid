import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzbc8yb0u.css';
import '../../css/k/kv281db7t.css';
import '../../css/z/z5jox1brf.css';
import '../../css/i/iyy0kbbjz.css';
import '../../css/e/ee3d2gb3d.css';
import '../../css/f/fg6kscp4i.css';
import '../../css/g/g210-fbtt.css';
import '../../css/l/lwupbl3_l.css';
import '../../css/q/qmuknbxub.css';
import '../../css/c/ce3whnthw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wzbc8yb0u"/><path class="kv281db7t"/><path class="z5jox1brf"/><path class="iyy0kbbjz"/><path class="ee3d2gb3d"/><path class="fg6kscp4i"/><path class="g210-fbtt"/><path class="lwupbl3_l"/><path class="qmuknbxub"/><path class="ce3whnthw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:departmentstore"} {...others} />);
}

export default Component;
