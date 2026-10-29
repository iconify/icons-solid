import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plz472bvb.css';
import '../../css/l/lgn7p_bmm.css';
import '../../css/r/rjyz6dh8o.css';
import '../../css/i/iogkgdkci.css';
import '../../css/l/lzqtgvb-x.css';
import '../../css/i/im_c8d17l.css';
import '../../css/s/sodk9abvk.css';
import '../../css/g/gwi95yedc.css';
import '../../css/t/tfl8j4bad.css';
import '../../css/a/ackeip50i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="plz472bvb"/><path class="lgn7p_bmm"/><path class="rjyz6dh8o"/><path class="iogkgdkci"/><path class="lzqtgvb-x"/><path class="im_c8d17l"/><path class="sodk9abvk"/><path class="gwi95yedc"/><path class="tfl8j4bad"/><path class="ackeip50i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:juce-wordmark"} {...others} />);
}

export default Component;
