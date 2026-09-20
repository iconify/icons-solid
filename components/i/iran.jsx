import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf9l6mb7k.css';
import '../../css/a/ai4etpbrx.css';
import '../../css/n/n1_7vtrkf.css';
import '../../css/k/kyz1f8axe.css';
import '../../css/q/qrcatqv1r.css';
import '../../css/g/gfwnem4-s.css';
import '../../css/u/u1o8wdpbt.css';
import '../../css/p/pejpau1bn.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sf9l6mb7k"/><path class="ai4etpbrx"/><path class="n1_7vtrkf"/><path class="kyz1f8axe"/><path class="qrcatqv1r"/><path class="gfwnem4-s"/><path class="u1o8wdpbt"/><path class="pejpau1bn"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:iran"} {...others} />);
}

export default Component;
