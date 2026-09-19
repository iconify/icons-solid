import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g0yskbbpp.css';
import '../../css/m/m930bgbyr.css';
import '../../css/k/k397sib8s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="g0yskbbpp"/><path class="m930bgbyr"/><path class="k397sib8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:delete"} {...others} />);
}

export default Component;
