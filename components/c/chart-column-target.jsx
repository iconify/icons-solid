import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn0-u2b-e.css';
import '../../css/i/i4_lnxbyy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vn0-u2b-e"/><path class="i4_lnxbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-column-target"} {...others} />);
}

export default Component;
