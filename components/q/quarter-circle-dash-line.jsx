import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1sw88bqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1sw88bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:quarter-circle-dash-line"} {...others} />);
}

export default Component;
