import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lyard7xsu.css';
import '../../css/w/wdmhf0zli.css';
import '../../css/q/quldjab0d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="lyard7xsu"/><path class="wdmhf0zli"/><path class="quldjab0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:grid-three"} {...others} />);
}

export default Component;
