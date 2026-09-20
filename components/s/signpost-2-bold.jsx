import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ztn9307gx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ztn9307gx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:signpost-2-bold"} {...others} />);
}

export default Component;
