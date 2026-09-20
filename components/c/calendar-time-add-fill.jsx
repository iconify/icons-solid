import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzu-h2-ey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dzu-h2-ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:calendar-time-add-fill"} {...others} />);
}

export default Component;
