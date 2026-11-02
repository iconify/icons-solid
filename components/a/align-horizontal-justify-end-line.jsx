import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr5jq2bqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lr5jq2bqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:align-horizontal-justify-end-line"} {...others} />);
}

export default Component;
