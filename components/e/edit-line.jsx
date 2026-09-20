import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylc0x0u6g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ylc0x0u6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:edit-line"} {...others} />);
}

export default Component;
