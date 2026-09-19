import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwxs6d3ky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vwxs6d3ky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:screen-full-thin"} {...others} />);
}

export default Component;
