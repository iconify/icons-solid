import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mogw6gb1u.css';
import '../../css/g/gq04hhbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mogw6gb1u"/><path class="gq04hhbwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-snooze-03"} {...others} />);
}

export default Component;
