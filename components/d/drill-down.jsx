import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oodzlwb8f.css';
import '../../css/o/ou77jgbpx.css';
import '../../css/c/c18fbur1q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oodzlwb8f"/><path class="ou77jgbpx"/><path class="c18fbur1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:drill-down"} {...others} />);
}

export default Component;
