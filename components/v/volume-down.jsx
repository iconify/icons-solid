import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lrejz_2gf.css';
import '../../css/p/pflujq7cq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lrejz_2gf"/><path class="pflujq7cq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:volume-down"} {...others} />);
}

export default Component;
