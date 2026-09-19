import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8075rspi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8075rspi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-right-down-arrow-circle"} {...others} />);
}

export default Component;
