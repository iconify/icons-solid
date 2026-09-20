import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmen-absx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hmen-absx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:surround-sound-line"} {...others} />);
}

export default Component;
