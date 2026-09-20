import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_q_12zeq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_q_12zeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:numeric-9-plus-box-multiple"} {...others} />);
}

export default Component;
