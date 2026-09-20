import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk95g98tl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nk95g98tl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:laptop-action-flash"} {...others} />);
}

export default Component;
