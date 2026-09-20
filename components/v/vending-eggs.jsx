import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg5u6gbbk.css';
import '../../css/d/dl5lurb6k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xg5u6gbbk"/><path class="dl5lurb6k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-eggs"} {...others} />);
}

export default Component;
