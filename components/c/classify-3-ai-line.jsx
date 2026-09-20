import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwg-msb6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xwg-msb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:classify-3-ai-line"} {...others} />);
}

export default Component;
