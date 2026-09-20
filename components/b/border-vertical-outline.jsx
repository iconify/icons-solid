import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qeo4x-vgi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qeo4x-vgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:border-vertical-outline"} {...others} />);
}

export default Component;
