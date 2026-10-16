import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suk0u9b4j.css';
import '../../css/v/vrixi1pns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="suk0u9b4j"/><path class="vrixi1pns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-full-20"} {...others} />);
}

export default Component;
