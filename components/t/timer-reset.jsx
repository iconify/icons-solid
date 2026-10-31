import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y_yc9pjvn.css';
import '../../css/i/iod2rc--u.css';
import '../../css/r/ru_m_q-rd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y_yc9pjvn"/><path class="iod2rc--u wm-shadow"/><path class="ru_m_q-rd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:timer-reset"} {...others} />);
}

export default Component;
