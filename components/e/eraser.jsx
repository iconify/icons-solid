import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz2-0f1zi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz2-0f1zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:eraser"} {...others} />);
}

export default Component;
