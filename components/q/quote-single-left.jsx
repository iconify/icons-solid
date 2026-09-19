import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn0ezyjmn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xn0ezyjmn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:quote-single-left"} {...others} />);
}

export default Component;
