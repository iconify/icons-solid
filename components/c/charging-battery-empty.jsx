import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4nn2vsvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x4nn2vsvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:charging-battery-empty"} {...others} />);
}

export default Component;
