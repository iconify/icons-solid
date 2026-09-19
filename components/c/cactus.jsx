import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/ohzyaebtv.css';
import '../../css/d/ds9ux5m3n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="ohzyaebtv"/><path class="ds9ux5m3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cactus"} {...others} />);
}

export default Component;
