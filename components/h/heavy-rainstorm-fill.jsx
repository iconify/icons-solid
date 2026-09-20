import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4597xbuu.css';
import '../../css/x/xrgvwubzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4597xbuu"/><path class="xrgvwubzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:heavy-rainstorm-fill"} {...others} />);
}

export default Component;
