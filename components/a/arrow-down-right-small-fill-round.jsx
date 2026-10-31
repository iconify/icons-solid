import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp9z4c-9n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dp9z4c-9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-down-right-small-fill-round"} {...others} />);
}

export default Component;
