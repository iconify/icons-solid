import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r59kf3bmu.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="r59kf3bmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:seatbelt"} {...others} />);
}

export default Component;
