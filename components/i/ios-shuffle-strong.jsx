import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj3y0cblt.css';
import '../../css/v/v2096mbgt.css';
import '../../css/g/gr_mehv_y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xj3y0cblt"/><path class="v2096mbgt"/><path class="gr_mehv_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-shuffle-strong"} {...others} />);
}

export default Component;
