import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct8j_ekhr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ct8j_ekhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bottom-right-outline"} {...others} />);
}

export default Component;
