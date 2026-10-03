import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7e39wbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7e39wbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:outdoor-motion"} {...others} />);
}

export default Component;
