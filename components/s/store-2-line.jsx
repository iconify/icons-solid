import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bzqcv6b8g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bzqcv6b8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:store-2-line"} {...others} />);
}

export default Component;
