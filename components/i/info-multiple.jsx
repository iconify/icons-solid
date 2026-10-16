import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cswyp5p5z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cswyp5p5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:info-multiple"} {...others} />);
}

export default Component;
