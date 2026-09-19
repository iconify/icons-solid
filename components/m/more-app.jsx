import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kz9mh0v6m.css';
import '../../css/e/e_7i-ix1w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="kz9mh0v6m"/><path class="e_7i-ix1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:more-app"} {...others} />);
}

export default Component;
