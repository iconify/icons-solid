import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsv_9ebej.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nsv_9ebej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:logout-circle-r-fill"} {...others} />);
}

export default Component;
