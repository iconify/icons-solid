import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gi6to1cst.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gi6to1cst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-metric"} {...others} />);
}

export default Component;
