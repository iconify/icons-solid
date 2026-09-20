import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nund8c9im.css';

const viewBox = {"width":1534,"height":1536};
const content = `<path class="nund8c9im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wind-direction-se"} {...others} />);
}

export default Component;
