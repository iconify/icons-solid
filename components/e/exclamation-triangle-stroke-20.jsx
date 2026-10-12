import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4db04ha.css';
import '../../css/x/xr7c334jq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wj4db04ha"/><path class="xr7c334jq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:exclamation-triangle-stroke-20"} {...others} />);
}

export default Component;
