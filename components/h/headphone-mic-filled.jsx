import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/drzam248w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="drzam248w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:headphone-mic-filled"} {...others} />);
}

export default Component;
