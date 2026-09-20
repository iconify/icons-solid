import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn_-277ym.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mn_-277ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:account-reactivate"} {...others} />);
}

export default Component;
