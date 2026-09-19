import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jja48fb-u.css';
import '../../css/e/e99x7cbrv.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="bi12bsetm"><path class="jja48fb-u"/><path class="e99x7cbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:tmux"} {...others} />);
}

export default Component;
