import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x6szhwbnt.css';
import '../../css/w/wtfyi0bxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x6szhwbnt"/><path class="wtfyi0bxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-snooze-01"} {...others} />);
}

export default Component;
