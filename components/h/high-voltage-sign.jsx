import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rse-n5zhn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="rse-n5zhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:high-voltage-sign"} {...others} />);
}

export default Component;
