import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kb3w1gazs.css';
import '../../css/m/m2fqo1-6n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="kb3w1gazs"/><path class="m2fqo1-6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chart-proportion"} {...others} />);
}

export default Component;
