import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwt1pvbwz.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};
const content = `<path class="vwt1pvbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevron-circle-down-right"} {...others} />);
}

export default Component;
