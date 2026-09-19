import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0qkuvese.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="r0qkuvese"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:projection-screen"} {...others} />);
}

export default Component;
