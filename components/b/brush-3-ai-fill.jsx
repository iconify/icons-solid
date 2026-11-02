import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxmqqxb6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxmqqxb6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:brush-3-ai-fill"} {...others} />);
}

export default Component;
