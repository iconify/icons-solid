import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/a/a03gtg9ze.css';
import '../../css/k/kxmk9fbaq.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/z/zd2mfmmas.css';
import '../../css/m/m3b0d263l.css';
import '../../css/i/iben6skwh.css';
import '../../css/v/v3einuwth.css';
import '../../css/w/w30en3b6s.css';
import '../../css/x/xi8iwsb_r.css';
import '../../css/n/n5ximqbge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="a03gtg9ze wm-k"/><path class="kxmk9fbaq wm-k"/><path class="d9wk5wbku wm-shine"/><path class="wm-k zd2mfmmas"/><path class="m3b0d263l wm-k"/><path class="iben6skwh wm-k"/><path class="v3einuwth wm-shine"/><path class="w30en3b6s wm-k"/><path class="wm-a xi8iwsb_r"/><path class="n5ximqbge wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:clock"} {...others} />);
}

export default Component;
