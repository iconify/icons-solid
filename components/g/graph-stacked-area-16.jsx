import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh4ji-bcc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vh4ji-bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:graph-stacked-area-16"} {...others} />);
}

export default Component;
