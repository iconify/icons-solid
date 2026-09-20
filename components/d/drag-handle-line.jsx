import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0hsdabga.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0hsdabga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:drag-handle-line"} {...others} />);
}

export default Component;
