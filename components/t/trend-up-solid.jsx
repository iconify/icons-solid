import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh1ztlbds.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="vh1ztlbds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:trend-up-solid"} {...others} />);
}

export default Component;
