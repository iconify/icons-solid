import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9hgbnx1z.css';

const viewBox = {"width":6,"height":16};
const content = `<path class="r9hgbnx1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:triangle-left"} {...others} />);
}

export default Component;
