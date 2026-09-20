import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jo84t76hr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jo84t76hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:medal-star-circle-outline"} {...others} />);
}

export default Component;
