import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk7l_pq-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yk7l_pq-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:calendar-off"} {...others} />);
}

export default Component;
