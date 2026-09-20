import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xr_rtccfq.css';
import '../../css/q/q3s24obkd.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="xr_rtccfq"/><path class="q3s24obkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-family-practice"} {...others} />);
}

export default Component;
