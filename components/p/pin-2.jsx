import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mq-jbmd_n.css';
import '../../css/v/vf5hwbb7p.css';
import '../../css/m/mbhw9acje.css';
import '../../css/a/aqkaymaeh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mq-jbmd_n"/><path class="vf5hwbb7p"/><path class="mbhw9acje"/><path class="aqkaymaeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pin-2"} {...others} />);
}

export default Component;
