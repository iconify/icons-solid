import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/e/e8jxhdczm.css';
import '../../css/m/mp3b3lb8i.css';
import '../../css/q/q43juwmyx.css';
import '../../css/l/l-pts9b2b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="e8jxhdczm"/><path class="mp3b3lb8i"/><rect class="q43juwmyx"/><path class="l-pts9b2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:locking-laptop"} {...others} />);
}

export default Component;
