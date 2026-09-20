import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bo1qmrsci.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bo1qmrsci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-on-pier-in-water"} {...others} />);
}

export default Component;
