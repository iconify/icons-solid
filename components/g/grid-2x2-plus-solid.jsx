import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox8_lzbbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox8_lzbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grid-2x2-plus-solid"} {...others} />);
}

export default Component;
