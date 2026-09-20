import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1z1cpkvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q1z1cpkvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:chevron-down-rectangle-filled"} {...others} />);
}

export default Component;
