import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baahp-79z.css';
import '../../css/h/h55kfl3ha.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="baahp-79z"/><path class="h55kfl3ha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-bar-chart-square"} {...others} />);
}

export default Component;
