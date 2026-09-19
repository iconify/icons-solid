import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kwxsi0iqn.css';
import '../../css/k/kzr7cgbaa.css';
import '../../css/a/akrasacmh.css';
import '../../css/e/eeg43_tpw.css';
import '../../css/a/ax8ltqbtx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kwxsi0iqn"/><path clip-rule="evenodd" class="kzr7cgbaa"/><path class="akrasacmh"/><path clip-rule="evenodd" class="eeg43_tpw"/><path class="ax8ltqbtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:kiss-wink-heart-outline"} {...others} />);
}

export default Component;
