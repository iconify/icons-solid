import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfncn9b1t.css';

const viewBox = {"width":13,"height":16};
const content = `<path class="jfncn9b1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:stepback"} {...others} />);
}

export default Component;
