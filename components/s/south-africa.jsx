import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czx5m2b9q.css';
import '../../css/d/ds6rabc7s.css';
import '../../css/k/k3z7zzbdk.css';
import '../../css/s/sj_zwjzie.css';
import '../../css/y/yfg9onbbs.css';
import '../../css/g/g61b58bto.css';
import '../../css/d/dnc3m4dck.css';
import '../../css/v/vbokdfbsc.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="czx5m2b9q"/><path class="ds6rabc7s"/><path class="k3z7zzbdk"/><path class="sj_zwjzie"/><path class="yfg9onbbs"/><path class="g61b58bto"/><path class="dnc3m4dck"/><path class="vbokdfbsc"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:south-africa"} {...others} />);
}

export default Component;
