import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktdkn9brl.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ktdkn9brl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:search-circle-outline"} {...others} />);
}

export default Component;
