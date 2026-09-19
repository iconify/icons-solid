import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwk9km0ju.css';
import '../../css/q/qc6zzhbcb.css';
import '../../css/w/wojf2p3ei.css';
import '../../css/s/seqbell4o.css';
import '../../css/l/lehueubsj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vwk9km0ju"/><path class="qc6zzhbcb"/><path class="wojf2p3ei"/><path class="seqbell4o"/><path class="lehueubsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:firebase"} {...others} />);
}

export default Component;
