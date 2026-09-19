import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htdwecomi.css';
import '../../css/a/a7pe4ku8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htdwecomi"/><path class="a7pe4ku8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:timer-filled"} {...others} />);
}

export default Component;
