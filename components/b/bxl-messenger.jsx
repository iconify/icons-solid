import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krk_5tb9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="krk_5tb9h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-messenger"} {...others} />);
}

export default Component;
