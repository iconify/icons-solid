import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lki0ay3vv.css';
import '../../css/s/skisy1f8p.css';
import '../../css/t/tj_ok-scb.css';
import '../../css/r/rwutrzc1n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lki0ay3vv"/><path class="skisy1f8p"/><path class="tj_ok-scb"/><path class="rwutrzc1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fit-to-width-square"} {...others} />);
}

export default Component;
