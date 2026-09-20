import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij-3dl-jv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ij-3dl-jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:blocked-16"} {...others} />);
}

export default Component;
