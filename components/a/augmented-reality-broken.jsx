import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vzy5f4b4h.css';
import '../../css/f/f6nccb4ip.css';
import '../../css/q/q9mypp8bw.css';
import '../../css/l/l3ir29pqm.css';
import '../../css/s/sy4dadcnw.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vzy5f4b4h"/><path class="f6nccb4ip"/><path class="q9mypp8bw"/><path class="l3ir29pqm"/><path class="sy4dadcnw"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:augmented-reality-broken"} {...others} />);
}

export default Component;
