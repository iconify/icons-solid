import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qk9qbrbug.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qk9qbrbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:markdown-16"} {...others} />);
}

export default Component;
