import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbvpz2owh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cbvpz2owh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:medal-ribbon-with-anchor"} {...others} />);
}

export default Component;
