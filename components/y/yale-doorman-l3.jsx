import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha_y7ohok.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ha_y7ohok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:yale-doorman-l3"} {...others} />);
}

export default Component;
