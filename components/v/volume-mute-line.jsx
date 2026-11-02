import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3r9fnbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3r9fnbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:volume-mute-line"} {...others} />);
}

export default Component;
