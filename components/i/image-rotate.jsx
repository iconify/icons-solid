import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1o1fw7_e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u1o1fw7_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:image-rotate"} {...others} />);
}

export default Component;
