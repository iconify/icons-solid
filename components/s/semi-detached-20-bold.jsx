import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdcnnnb3n.css';
import '../../css/x/xxc3j4pon.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gdcnnnb3n"/><path class="xxc3j4pon"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:semi-detached-20-bold"} {...others} />);
}

export default Component;
