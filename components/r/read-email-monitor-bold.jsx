import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km7s_km6t.css';
import '../../css/y/ygu8evkrm.css';
import '../../css/d/dzn4brbyr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="km7s_km6t"/><path class="ygu8evkrm"/><path class="dzn4brbyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:read-email-monitor-bold"} {...others} />);
}

export default Component;
