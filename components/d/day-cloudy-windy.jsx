import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4d9s_b0i.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="h4d9s_b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:day-cloudy-windy"} {...others} />);
}

export default Component;
