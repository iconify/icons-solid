import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8f3o8_hj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j8f3o8_hj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:rotate-cw-sharp-two-tone"} {...others} />);
}

export default Component;
