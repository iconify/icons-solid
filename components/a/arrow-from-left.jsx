import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kei-b7but.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kei-b7but"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:arrow-from-left"} {...others} />);
}

export default Component;
