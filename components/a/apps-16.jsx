import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhp8hdctn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dhp8hdctn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:apps-16"} {...others} />);
}

export default Component;
