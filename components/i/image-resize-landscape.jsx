import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ct4c3sv7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ct4c3sv7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:image-resize-landscape"} {...others} />);
}

export default Component;
