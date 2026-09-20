import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdtr9bfpm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hdtr9bfpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:imac-outline"} {...others} />);
}

export default Component;
