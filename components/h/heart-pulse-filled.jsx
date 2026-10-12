import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wexh7077m.css';
import '../../css/r/r1d07kbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wexh7077m"/><path class="r1d07kbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:heart-pulse-filled"} {...others} />);
}

export default Component;
