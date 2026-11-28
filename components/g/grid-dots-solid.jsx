import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pelwo0_dp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pelwo0_dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:grid-dots-solid"} {...others} />);
}

export default Component;
