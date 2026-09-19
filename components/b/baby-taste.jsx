import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nzlj35b2s.css';
import '../../css/x/x020qsbsu.css';
import '../../css/n/n4bdwrb1l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="nzlj35b2s"/><path class="x020qsbsu"/><path class="n4bdwrb1l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baby-taste"} {...others} />);
}

export default Component;
