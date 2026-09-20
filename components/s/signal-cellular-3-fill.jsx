import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kp47-_m7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kp47-_m7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:signal-cellular-3-fill"} {...others} />);
}

export default Component;
