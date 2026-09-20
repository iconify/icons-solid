import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zb69-0b6a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zb69-0b6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:volume-1"} {...others} />);
}

export default Component;
