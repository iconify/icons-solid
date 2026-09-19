import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okzh9cbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="okzh9cbiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:spotpear-round-speaker-n16r8"} {...others} />);
}

export default Component;
