import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvi9l7iyw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gvi9l7iyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cloud-circle"} {...others} />);
}

export default Component;
