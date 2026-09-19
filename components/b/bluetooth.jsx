import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pcixz7jrf.css';

const viewBox = {"width":1344,"height":1792};
const content = `<path class="pcixz7jrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:bluetooth"} {...others} />);
}

export default Component;
