import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7wj9tb6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7wj9tb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:danmaku-off-fill"} {...others} />);
}

export default Component;
