import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r97jpv_wj.css';
import '../../css/j/jmb8kfb8s.css';
import '../../css/d/d7js7mtyy.css';
import '../../css/h/hq2mackzs.css';
import '../../css/s/s6vu13k7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="r97jpv_wj"/><path clip-rule="evenodd" class="jmb8kfb8s"/><path clip-rule="evenodd" class="d7js7mtyy"/><path clip-rule="evenodd" class="hq2mackzs"/><path clip-rule="evenodd" class="s6vu13k7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:star-medal-flat"} {...others} />);
}

export default Component;
