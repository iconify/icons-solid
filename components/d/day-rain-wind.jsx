import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qamee38ti.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="qamee38ti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:day-rain-wind"} {...others} />);
}

export default Component;
