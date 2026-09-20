import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8g3p2xah.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="c8g3p2xah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:blame"} {...others} />);
}

export default Component;
