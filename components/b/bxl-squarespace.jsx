import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfzqp5zje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfzqp5zje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-squarespace"} {...others} />);
}

export default Component;
