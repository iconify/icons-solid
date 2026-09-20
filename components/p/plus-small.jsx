import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbpw3ccwc.css';

const viewBox = {"width":7,"height":16};
const content = `<path class="wbpw3ccwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:plus-small"} {...others} />);
}

export default Component;
