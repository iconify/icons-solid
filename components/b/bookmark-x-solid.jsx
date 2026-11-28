import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gw9wn5d7w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gw9wn5d7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bookmark-x-solid"} {...others} />);
}

export default Component;
