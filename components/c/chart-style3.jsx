import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj7w4ccsq.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="nj7w4ccsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:chart-style3"} {...others} />);
}

export default Component;
