import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/de4gibyge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="de4gibyge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:kayak"} {...others} />);
}

export default Component;
