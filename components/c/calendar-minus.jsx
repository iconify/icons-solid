import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp6js4-lm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pp6js4-lm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:calendar-minus"} {...others} />);
}

export default Component;
