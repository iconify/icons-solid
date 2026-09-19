import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/e/eckqqnj5s.css';
import '../../css/y/yn74iwb5y.css';
import '../../css/z/zxfq7sb8x.css';
import '../../css/s/simgxcb4x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path clip-rule="evenodd" class="eckqqnj5s"/><path class="yn74iwb5y"/><path class="zxfq7sb8x"/><path class="simgxcb4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:building-four"} {...others} />);
}

export default Component;
