import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/z/zsoxqccwo.css';
import '../../css/l/lyoiuubza.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="zsoxqccwo"/><path class="lyoiuubza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:code"} {...others} />);
}

export default Component;
