import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fe5k7yzpc.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="fe5k7yzpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:grin-tears"} {...others} />);
}

export default Component;
