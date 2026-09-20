import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vubic6b0s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vubic6b0s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:horizontal-rule-16"} {...others} />);
}

export default Component;
