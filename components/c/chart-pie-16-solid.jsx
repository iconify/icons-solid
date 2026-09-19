import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y8wbxwy2x.css';
import '../../css/c/clxvp5dwo.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y8wbxwy2x"/><path class="clxvp5dwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chart-pie-16-solid"} {...others} />);
}

export default Component;
