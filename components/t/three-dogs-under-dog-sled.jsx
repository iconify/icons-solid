import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rx5z0ablq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rx5z0ablq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:three-dogs-under-dog-sled"} {...others} />);
}

export default Component;
