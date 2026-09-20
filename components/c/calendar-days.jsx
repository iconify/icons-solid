import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxxjieq7t.css';
import '../../css/l/lec3gmbyk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nxxjieq7t"/><path class="lec3gmbyk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:calendar-days"} {...others} />);
}

export default Component;
