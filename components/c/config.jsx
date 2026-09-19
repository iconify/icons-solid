import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nfncz0b5x.css';
import '../../css/l/llqfild5y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="nfncz0b5x"/><path class="llqfild5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:config"} {...others} />);
}

export default Component;
