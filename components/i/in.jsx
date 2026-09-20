import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esgu39jto.css';
import '../../css/j/j9zhcjcel.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="esgu39jto"/><path class="j9zhcjcel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:in"} {...others} />);
}

export default Component;
