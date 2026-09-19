import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vrf4c8bku.css';
import '../../css/q/q7b-qqb7o.css';
import '../../css/f/fjfqhmcai.css';
import '../../css/f/fopwb5vtp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vrf4c8bku"/><path class="q7b-qqb7o"/><path class="fjfqhmcai"/><path class="fopwb5vtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:email-down"} {...others} />);
}

export default Component;
