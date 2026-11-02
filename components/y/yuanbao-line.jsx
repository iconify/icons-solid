import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/spwm54azc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="spwm54azc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:yuanbao-line"} {...others} />);
}

export default Component;
