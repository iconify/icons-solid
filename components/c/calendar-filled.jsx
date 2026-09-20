import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v7_go48_e.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="v7_go48_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:calendar-filled"} {...others} />);
}

export default Component;
