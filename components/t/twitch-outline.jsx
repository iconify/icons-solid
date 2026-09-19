import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py1q_xb1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="py1q_xb1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:twitch-outline"} {...others} />);
}

export default Component;
