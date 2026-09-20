import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7ddjvb3q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h7ddjvb3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:subarr-light"} {...others} />);
}

export default Component;
