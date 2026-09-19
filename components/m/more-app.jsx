import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m_7x66byi.css';
import '../../css/e/e_7i-ix1w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="m_7x66byi"/><path class="e_7i-ix1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:more-app"} {...others} />);
}

export default Component;
