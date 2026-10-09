import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pepcxkbtl.css';
import '../../css/m/mvmh7mwai.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pepcxkbtl"/><path class="mvmh7mwai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:receipt-20"} {...others} />);
}

export default Component;
