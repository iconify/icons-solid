import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_ufj2b-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i_ufj2b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:swipe-down-gesture"} {...others} />);
}

export default Component;
