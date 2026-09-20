import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4vpy9bhf.css';

const viewBox = {"width":193.2,"height":58.2};
const content = `<path class="d4vpy9bhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:avid-light"} {...others} />);
}

export default Component;
