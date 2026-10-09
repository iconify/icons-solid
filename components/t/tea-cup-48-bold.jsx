import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rr28mrwkz.css';
import '../../css/h/hna37so3u.css';
import '../../css/s/su958tz7j.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rr28mrwkz"/><path class="hna37so3u"/><path class="su958tz7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tea-cup-48-bold"} {...others} />);
}

export default Component;
