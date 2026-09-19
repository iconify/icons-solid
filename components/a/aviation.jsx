import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uisjjab3n.css';
import '../../css/f/frhsgi1-e.css';
import '../../css/m/mdagr1bqs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="uisjjab3n"/><path class="frhsgi1-e"/><path class="mdagr1bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:aviation"} {...others} />);
}

export default Component;
