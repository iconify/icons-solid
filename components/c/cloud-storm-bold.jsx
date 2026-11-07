import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrctc3yce.css';
import '../../css/o/ow7qimb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hrctc3yce"/><path class="ow7qimb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-storm-bold"} {...others} />);
}

export default Component;
