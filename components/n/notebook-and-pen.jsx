import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o7nlekb5k.css';
import '../../css/n/n38-90bbf.css';
import '../../css/b/bzizj_b8i.css';
import '../../css/m/mvtfcrbfq.css';
import '../../css/l/l6-emqj9o.css';
import '../../css/u/ugvdv2sro.css';
import '../../css/t/tl0qr0vtb.css';
import '../../css/k/ka4vgjl-r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="o7nlekb5k"/><path class="n38-90bbf"/><path class="bzizj_b8i"/><path class="mvtfcrbfq"/><path class="l6-emqj9o"/><path class="ugvdv2sro"/><path class="tl0qr0vtb"/><path class="ka4vgjl-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:notebook-and-pen"} {...others} />);
}

export default Component;
