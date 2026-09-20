import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/nz3pocc6v.css';
import '../../css/y/yvmj5ab_p.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="nz3pocc6v"/><path class="yvmj5ab_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:database"} {...others} />);
}

export default Component;
