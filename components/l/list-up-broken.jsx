import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/utbx9q75k.css';
import '../../css/q/qesyv5buv.css';
import '../../css/d/djbi_ub-i.css';
import '../../css/p/pre11cbbs.css';
import '../../css/q/qtz6yi5yq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="utbx9q75k"/><path class="qesyv5buv"/><path class="djbi_ub-i"/><path class="pre11cbbs"/><path class="qtz6yi5yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-up-broken"} {...others} />);
}

export default Component;
