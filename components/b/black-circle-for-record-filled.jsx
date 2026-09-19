import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tugnq-b6d.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="tugnq-b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:black-circle-for-record-filled"} {...others} />);
}

export default Component;
