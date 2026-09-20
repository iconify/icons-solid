import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4wqo7b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4wqo7b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pyramid-chart-light"} {...others} />);
}

export default Component;
