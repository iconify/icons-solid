import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz06e3bkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fz06e3bkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:waiting-room"} {...others} />);
}

export default Component;
