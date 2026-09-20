import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpu-0cats.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="wpu-0cats"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:bar-chart-outline"} {...others} />);
}

export default Component;
