import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ov1f3v2im.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ov1f3v2im"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:alarm-clock-check-sharp"} {...others} />);
}

export default Component;
