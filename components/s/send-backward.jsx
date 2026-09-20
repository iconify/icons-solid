import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx6vj_dxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tx6vj_dxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:send-backward"} {...others} />);
}

export default Component;
