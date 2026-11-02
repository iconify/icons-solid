import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwo770bzq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qwo770bzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:map-pin-plus-inside-line"} {...others} />);
}

export default Component;
