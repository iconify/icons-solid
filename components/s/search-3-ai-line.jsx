import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owihpxbhp.css';
import '../../css/b/b3rcvrrsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="owihpxbhp"/><path class="b3rcvrrsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:search-3-ai-line"} {...others} />);
}

export default Component;
