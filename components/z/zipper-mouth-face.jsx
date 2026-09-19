import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpao0wblm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="mpao0wblm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:zipper-mouth-face"} {...others} />);
}

export default Component;
