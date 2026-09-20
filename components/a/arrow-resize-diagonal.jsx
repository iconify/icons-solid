import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1oh_mz-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f1oh_mz-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:arrow-resize-diagonal"} {...others} />);
}

export default Component;
