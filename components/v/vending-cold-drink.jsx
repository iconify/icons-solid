import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg5u6gbbk.css';
import '../../css/x/xe4ku3b8g.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xg5u6gbbk"/><path class="xe4ku3b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-cold-drink"} {...others} />);
}

export default Component;
