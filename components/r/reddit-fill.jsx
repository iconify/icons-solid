import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlm2j4byg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wlm2j4byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:reddit-fill"} {...others} />);
}

export default Component;
