import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi0f-zb-z.css';
import '../../css/j/jvrj_gb8g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hi0f-zb-z"/><path class="jvrj_gb8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:list-low-priority"} {...others} />);
}

export default Component;
