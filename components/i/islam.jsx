import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/alq3d8bxe.css';
import '../../css/i/inclo6q1p.css';
import '../../css/a/aotg0jnkj.css';
import '../../css/h/h5gz3j7uq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="alq3d8bxe"/><path class="inclo6q1p"/><path class="aotg0jnkj"/><path class="h5gz3j7uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:islam"} {...others} />);
}

export default Component;
