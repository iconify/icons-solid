import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yz_t73nab.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yz_t73nab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:eraser"} {...others} />);
}

export default Component;
