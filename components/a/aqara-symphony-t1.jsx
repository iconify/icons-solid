import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz0nrs-zq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uz0nrs-zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:aqara-symphony-t1"} {...others} />);
}

export default Component;
