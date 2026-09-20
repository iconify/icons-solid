import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngng7qbgc.css';
import '../../css/d/d1fuzwb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ngng7qbgc"/><path class="d1fuzwb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:watermelon-filled"} {...others} />);
}

export default Component;
