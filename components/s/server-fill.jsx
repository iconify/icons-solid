import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_bbk3_og.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_bbk3_og"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:server-fill"} {...others} />);
}

export default Component;
