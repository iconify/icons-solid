import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8vd6_b3i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r8vd6_b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:treasure-map"} {...others} />);
}

export default Component;
