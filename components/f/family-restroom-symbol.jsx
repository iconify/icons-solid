import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxo33drqq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="sxo33drqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:family-restroom-symbol"} {...others} />);
}

export default Component;
