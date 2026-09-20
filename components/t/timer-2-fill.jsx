import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu2s_jbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vu2s_jbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:timer-2-fill"} {...others} />);
}

export default Component;
