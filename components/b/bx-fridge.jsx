import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn_7obc0p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yn_7obc0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-fridge"} {...others} />);
}

export default Component;
