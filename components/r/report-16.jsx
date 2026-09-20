import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb75cm3nn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wb75cm3nn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:report-16"} {...others} />);
}

export default Component;
