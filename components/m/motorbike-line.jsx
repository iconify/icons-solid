import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sof3dcy3h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sof3dcy3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:motorbike-line"} {...others} />);
}

export default Component;
