import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r95xtcble.css';

const viewBox = {"width":193.2,"height":58.2};
const content = `<path class="r95xtcble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:avid-dark"} {...others} />);
}

export default Component;
