import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/a/at-rwqbck.css';
import '../../css/f/f39j91bfb.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="at-rwqbck"/><path class="f39j91bfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:checkbox-checked"} {...others} />);
}

export default Component;
