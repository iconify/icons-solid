import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmq_8zrle.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rmq_8zrle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:apple-intelligence-frame-line"} {...others} />);
}

export default Component;
