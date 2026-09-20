import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hof5hlpov.css';
import '../../css/u/uvf0rqbma.css';
import '../../css/u/um4hubc6f.css';
import '../../css/n/narav6r7v.css';
import '../../css/y/y87zb12fc.css';
import '../../css/m/mf_-b151v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hof5hlpov"/><path class="uvf0rqbma"/><path class="um4hubc6f"/><path class="narav6r7v"/><path class="y87zb12fc"/><path class="mf_-b151v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:notification-alert"} {...others} />);
}

export default Component;
