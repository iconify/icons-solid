import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1svveh6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l1svveh6h primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-capricorn-duotone"} {...others} />);
}

export default Component;
