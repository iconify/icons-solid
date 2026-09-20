import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7mbenbgv.css';
import '../../css/j/j2bhf764p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e7mbenbgv"/><path class="j2bhf764p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:linux-fill"} {...others} />);
}

export default Component;
