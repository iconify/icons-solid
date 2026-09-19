import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb5dzpbru.css';
import '../../css/h/h8kldlbhr.css';
import '../../css/n/n-seofb-c.css';
import '../../css/m/m94ggluil.css';
import '../../css/p/pqto13t3t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bb5dzpbru"/><path class="h8kldlbhr"/><path class="n-seofb-c"/><path class="m94ggluil"/><path class="pqto13t3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:medicalmask"} {...others} />);
}

export default Component;
