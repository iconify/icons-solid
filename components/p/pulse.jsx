import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfzm8m2_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jfzm8m2_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:pulse"} {...others} />);
}

export default Component;
