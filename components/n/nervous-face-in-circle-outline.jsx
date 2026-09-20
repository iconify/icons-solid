import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_pecsbnu.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="r_pecsbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:nervous-face-in-circle-outline"} {...others} />);
}

export default Component;
