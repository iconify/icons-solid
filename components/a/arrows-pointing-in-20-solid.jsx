import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxineb4qx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rxineb4qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:arrows-pointing-in-20-solid"} {...others} />);
}

export default Component;
