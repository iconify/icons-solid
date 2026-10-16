import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq3f9xb0h.css';
import '../../css/v/vkpsfpb5v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nq3f9xb0h"/><path class="vkpsfpb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chainsaw-20"} {...others} />);
}

export default Component;
