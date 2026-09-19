import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srfh7msce.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="srfh7msce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:strikethrough"} {...others} />);
}

export default Component;
