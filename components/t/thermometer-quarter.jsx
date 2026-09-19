import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2y3f5bzu.css';

const viewBox = {"width":1024,"height":1792};
const content = `<path class="k2y3f5bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:thermometer-quarter"} {...others} />);
}

export default Component;
