import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3vmni1om.css';
import '../../css/i/i_h7t1znx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q3vmni1om"/><path class="i_h7t1znx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:microchip-board-bold"} {...others} />);
}

export default Component;
