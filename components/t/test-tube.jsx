import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pxwcw8_4n.css';
import '../../css/l/lcgkpub-o.css';
import '../../css/k/k5rh42l8r.css';
import '../../css/w/wv_-wnjxm.css';
import '../../css/m/mqpuqwnjq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="pxwcw8_4n"/><path clip-rule="evenodd" class="lcgkpub-o"/><path class="k5rh42l8r"/><path class="wv_-wnjxm"/><path class="mqpuqwnjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:test-tube"} {...others} />);
}

export default Component;
