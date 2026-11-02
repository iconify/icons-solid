import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvkdr3wzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rvkdr3wzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:strikethrough-fill"} {...others} />);
}

export default Component;
