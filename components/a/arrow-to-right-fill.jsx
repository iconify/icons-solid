import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ai5h96bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ai5h96bxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:arrow-to-right-fill"} {...others} />);
}

export default Component;
