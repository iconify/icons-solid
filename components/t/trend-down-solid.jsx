import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbtm4g3rc.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="hbtm4g3rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:trend-down-solid"} {...others} />);
}

export default Component;
