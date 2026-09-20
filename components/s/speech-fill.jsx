import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ug1e5o2al.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ug1e5o2al"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:speech-fill"} {...others} />);
}

export default Component;
