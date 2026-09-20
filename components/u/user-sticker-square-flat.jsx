import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtxvrwghe.css';
import '../../css/z/zx7n4cm_b.css';
import '../../css/m/mx-_0ybfu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jtxvrwghe"/><path clip-rule="evenodd" class="zx7n4cm_b"/><path class="mx-_0ybfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:user-sticker-square-flat"} {...others} />);
}

export default Component;
