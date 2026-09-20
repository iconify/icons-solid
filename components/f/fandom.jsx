import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu1ar6dsa.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="tu1ar6dsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:fandom"} {...others} />);
}

export default Component;
