import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/q/qc_3k6byd.css';
import '../../css/j/jqt682rgl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="qc_3k6byd"/><path class="jqt682rgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:english-mustache"} {...others} />);
}

export default Component;
