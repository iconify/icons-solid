import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0o_a6b2h.css';
import '../../css/q/q9ybrobvr.css';
import '../../css/k/kverakb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q0o_a6b2h"/><path class="q9ybrobvr"/><path class="kverakb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:laurel-wreath-02"} {...others} />);
}

export default Component;
