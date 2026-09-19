import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zsoks0b7i.css';
import '../../css/e/ew5hiuwst.css';
import '../../css/j/jly4_cfxo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="zsoks0b7i"/><path class="ew5hiuwst"/><path class="jly4_cfxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:man-golfing"} {...others} />);
}

export default Component;
