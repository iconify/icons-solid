import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdi1i0x2z.css';
import '../../css/m/mihzwk-vt.css';
import '../../css/k/kxkapvb-v.css';
import '../../css/o/ospq0jbhn.css';
import '../../css/q/qjeft_56v.css';
import '../../css/w/w-8esx38t.css';
import '../../css/k/kja9f29_a.css';
import '../../css/g/g27xk-b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow xdi1i0x2z"/><path class="mihzwk-vt wm-k"/><path class="kxkapvb-v wm-k"/><path class="ospq0jbhn wm-k"/><path class="qjeft_56v wm-k"/><path class="w-8esx38t wm-shine"/><path class="kja9f29_a wm-k"/><path class="g27xk-b7r wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:bookmark-check"} {...others} />);
}

export default Component;
