import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olkmp-6tv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="olkmp-6tv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:landscape-ai-fill"} {...others} />);
}

export default Component;
