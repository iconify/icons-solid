import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/e6pmp0b8v.css';
import '../../css/r/r1dv0f0sg.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="pr52f_b5y"><circle class="e6pmp0b8v"/><path class="r1dv0f0sg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:person"} {...others} />);
}

export default Component;
