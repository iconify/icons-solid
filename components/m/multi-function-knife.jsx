import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mgh9q_bnb.css';
import '../../css/p/p01swbcrb.css';
import '../../css/h/ha34b3bre.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="mgh9q_bnb"/><path class="p01swbcrb"/><path class="ha34b3bre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:multi-function-knife"} {...others} />);
}

export default Component;
