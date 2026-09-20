import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy8--92xl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fy8--92xl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:thumb-down-line"} {...others} />);
}

export default Component;
