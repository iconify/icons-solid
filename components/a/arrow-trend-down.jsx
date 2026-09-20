import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9v62pbcd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9v62pbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:arrow-trend-down"} {...others} />);
}

export default Component;
