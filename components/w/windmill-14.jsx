import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea3tl3bdz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ea3tl3bdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:windmill-14"} {...others} />);
}

export default Component;
