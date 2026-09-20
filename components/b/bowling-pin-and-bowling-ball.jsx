import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhbr0d30n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dhbr0d30n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bowling-pin-and-bowling-ball"} {...others} />);
}

export default Component;
