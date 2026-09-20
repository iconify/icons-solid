import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/g/gsbqg8kvb.css';
import '../../css/f/fc2f-fb1l.css';
import '../../css/f/fn77k9bkx.css';
import '../../css/o/ou05uac1c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="gsbqg8kvb"/><path class="fc2f-fb1l"/><path class="fn77k9bkx"/><path class="ou05uac1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:search-visual"} {...others} />);
}

export default Component;
