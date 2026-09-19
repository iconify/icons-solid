import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awn-39bfj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="awn-39bfj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:arrow-to-left"} {...others} />);
}

export default Component;
