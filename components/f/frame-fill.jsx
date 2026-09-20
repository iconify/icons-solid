import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5-v0tbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5-v0tbmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:frame-fill"} {...others} />);
}

export default Component;
