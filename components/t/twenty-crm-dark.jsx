import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sof4l1tbh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sof4l1tbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:twenty-crm-dark"} {...others} />);
}

export default Component;
