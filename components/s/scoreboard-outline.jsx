import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvy86qb_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fvy86qb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:scoreboard-outline"} {...others} />);
}

export default Component;
