import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c005r7bfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c005r7bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:trending-down-fill"} {...others} />);
}

export default Component;
