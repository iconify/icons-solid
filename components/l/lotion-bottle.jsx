import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/watxo_a7v.css';
import '../../css/p/py6u8gb0r.css';
import '../../css/t/tld99tb5o.css';
import '../../css/g/gf3g1zbno.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="watxo_a7v"/><path class="py6u8gb0r"/><path class="tld99tb5o"/><path class="gf3g1zbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:lotion-bottle"} {...others} />);
}

export default Component;
