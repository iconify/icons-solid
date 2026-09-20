import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4l6tdyts.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v4l6tdyts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:outgoing-call"} {...others} />);
}

export default Component;
