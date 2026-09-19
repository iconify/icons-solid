import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1hqot9ea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1hqot9ea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:player-next-thin"} {...others} />);
}

export default Component;
