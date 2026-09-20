import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-p2oz0-e.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="i-p2oz0-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:camcorder"} {...others} />);
}

export default Component;
