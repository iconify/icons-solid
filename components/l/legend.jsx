import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/txu7fdbjl.css';
import '../../css/y/y0w45ybdc.css';
import '../../css/m/mwcn4kbmy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="txu7fdbjl"/><rect class="y0w45ybdc"/><path class="mwcn4kbmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:legend"} {...others} />);
}

export default Component;
