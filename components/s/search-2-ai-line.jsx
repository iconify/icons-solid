import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oblu1ib9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oblu1ib9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:search-2-ai-line"} {...others} />);
}

export default Component;
