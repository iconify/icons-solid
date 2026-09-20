import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osvx2-h_b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="osvx2-h_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:wheel-fill"} {...others} />);
}

export default Component;
