import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp0oxifbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gp0oxifbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-gloss"} {...others} />);
}

export default Component;
