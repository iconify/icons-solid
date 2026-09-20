import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybf6b_bce.css';
import '../../css/i/iffo62bvg.css';
import '../../css/b/b8z5cxbaq.css';
import '../../css/g/ggfgcibha.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ybf6b_bce"/><path class="iffo62bvg"/><g><path class="b8z5cxbaq"/><path class="ggfgcibha"/><animateTransform additive="sum" attributeName="transform" calcMode="spline" dur="2s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="rotate" values="-6 256 256; 6 256 256; -6 256 256"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:compass"} {...others} />);
}

export default Component;
