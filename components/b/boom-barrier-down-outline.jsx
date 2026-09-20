import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz9uo7bkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jz9uo7bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:boom-barrier-down-outline"} {...others} />);
}

export default Component;
