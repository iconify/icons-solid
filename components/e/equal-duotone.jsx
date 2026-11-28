import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kkts_1q9h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kkts_1q9h primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:equal-duotone"} {...others} />);
}

export default Component;
