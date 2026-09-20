import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq16mac-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pq16mac-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:align-item-vertical-center-fill"} {...others} />);
}

export default Component;
