import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxvt694xb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxvt694xb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:right-angle-arrow"} {...others} />);
}

export default Component;
