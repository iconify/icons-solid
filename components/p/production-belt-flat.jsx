import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab3uexbgo.css';
import '../../css/d/d5a4hj3ff.css';
import '../../css/n/n16g4u9fz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ab3uexbgo"/><path class="d5a4hj3ff"/><path clip-rule="evenodd" class="n16g4u9fz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:production-belt-flat"} {...others} />);
}

export default Component;
