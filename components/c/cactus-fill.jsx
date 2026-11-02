import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu_ubp-zc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu_ubp-zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cactus-fill"} {...others} />);
}

export default Component;
