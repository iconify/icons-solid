import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roj7v4bmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="roj7v4bmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:connect-flash"} {...others} />);
}

export default Component;
