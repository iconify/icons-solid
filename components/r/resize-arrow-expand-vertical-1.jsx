import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr-9tjbeb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jr-9tjbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:resize-arrow-expand-vertical-1"} {...others} />);
}

export default Component;
