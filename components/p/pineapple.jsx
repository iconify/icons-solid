import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngekccevt.css';
import '../../css/j/j1mz5op1t.css';
import '../../css/l/l-vepwbos.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ngekccevt"/><path class="j1mz5op1t"/><path class="l-vepwbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pineapple"} {...others} />);
}

export default Component;
