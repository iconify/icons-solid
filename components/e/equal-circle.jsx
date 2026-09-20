import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx-4nmbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yx-4nmbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:equal-circle"} {...others} />);
}

export default Component;
