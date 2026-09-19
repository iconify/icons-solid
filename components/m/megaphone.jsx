import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc3l9v3wz.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bc3l9v3wz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:megaphone"} {...others} />);
}

export default Component;
