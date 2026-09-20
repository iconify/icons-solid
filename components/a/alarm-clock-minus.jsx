import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myubs7t0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="myubs7t0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:alarm-clock-minus"} {...others} />);
}

export default Component;
