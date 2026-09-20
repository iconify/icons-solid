import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7nq7lwub.css';
import '../../css/d/d7i08milv.css';
import '../../css/f/ffs9-abmh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v7nq7lwub"/><path class="d7i08milv"/><path clip-rule="evenodd" class="ffs9-abmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ai-navigation-spark-flat"} {...others} />);
}

export default Component;
