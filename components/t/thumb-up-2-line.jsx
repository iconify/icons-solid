import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byg7xq2ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="byg7xq2ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:thumb-up-2-line"} {...others} />);
}

export default Component;
