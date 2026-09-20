import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx5-28b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vx5-28b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pencil-2-line"} {...others} />);
}

export default Component;
