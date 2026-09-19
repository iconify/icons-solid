import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufuq57bcj.css';
import '../../css/t/t8y2ocbpg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ufuq57bcj"/><path class="t8y2ocbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:calendar-date"} {...others} />);
}

export default Component;
