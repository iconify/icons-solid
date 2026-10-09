import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8jg3rppc.css';
import '../../css/x/xh_480b1f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s8jg3rppc"/><path class="xh_480b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:kettle-48-bold"} {...others} />);
}

export default Component;
