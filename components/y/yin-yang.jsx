import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9lrq2kct.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="x9lrq2kct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:yin-yang"} {...others} />);
}

export default Component;
