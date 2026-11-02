import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg5ua8opk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tg5ua8opk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:circle-check-big-fill"} {...others} />);
}

export default Component;
