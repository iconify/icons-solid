import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/v/v95pm0brk.css';
import '../../css/o/odugvzbbi.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="v95pm0brk"/><path class="odugvzbbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:jump-left"} {...others} />);
}

export default Component;
