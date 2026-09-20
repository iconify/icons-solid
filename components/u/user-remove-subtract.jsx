import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lw9t853oj.css';
import '../../css/d/d-p6ffz3j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lw9t853oj"/><path class="d-p6ffz3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-remove-subtract"} {...others} />);
}

export default Component;
