import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy3vjrbom.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="cy3vjrbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:clockwise-solid"} {...others} />);
}

export default Component;
