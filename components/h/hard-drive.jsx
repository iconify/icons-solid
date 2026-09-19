import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coz3-p-uf.css';
import '../../css/v/v4gtsac9j.css';
import '../../css/q/q9hf28bpn.css';
import '../../css/k/kiz591b_t.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="coz3-p-uf"/><path class="v4gtsac9j"/><path class="q9hf28bpn"/><rect class="kiz591b_t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:hard-drive"} {...others} />);
}

export default Component;
