import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s98b-2bjf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s98b-2bjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sedan-under-taxi-checkerboard"} {...others} />);
}

export default Component;
