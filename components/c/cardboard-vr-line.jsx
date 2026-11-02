import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw-pdwb7e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mw-pdwb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:cardboard-vr-line"} {...others} />);
}

export default Component;
