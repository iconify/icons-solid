import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow6dvz9el.css';
import '../../css/f/f5-z0rdql.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ow6dvz9el"/><path class="f5-z0rdql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:circle-flask"} {...others} />);
}

export default Component;
