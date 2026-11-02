import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcx5dkeqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rcx5dkeqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:gallery-horizontal-end-fill"} {...others} />);
}

export default Component;
