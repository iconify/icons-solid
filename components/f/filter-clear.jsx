import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mb0epnoxf.css';
import '../../css/h/h2kfwdbij.css';
import '../../css/n/nd4zsfbra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mb0epnoxf"/><path clip-rule="evenodd" class="h2kfwdbij"/><path class="nd4zsfbra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:filter-clear"} {...others} />);
}

export default Component;
