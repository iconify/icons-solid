import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en3p91bgx.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="en3p91bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:leftdouble"} {...others} />);
}

export default Component;
