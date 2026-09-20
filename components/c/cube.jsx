import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/j/jviuwz32c.css';
import '../../css/u/ud7hor17k.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="jviuwz32c"/><path class="ud7hor17k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:cube"} {...others} />);
}

export default Component;
