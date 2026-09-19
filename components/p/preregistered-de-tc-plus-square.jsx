import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l89tdqbvo.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="l89tdqbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:preregistered-de-tc-plus-square"} {...others} />);
}

export default Component;
