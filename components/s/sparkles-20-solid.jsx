import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg5y5bc5f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fg5y5bc5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:sparkles-20-solid"} {...others} />);
}

export default Component;
