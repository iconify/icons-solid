import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-xi7c3pj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x-xi7c3pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-rupee-fill-round"} {...others} />);
}

export default Component;
