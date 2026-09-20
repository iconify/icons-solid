import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj6j6-bzv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj6j6-bzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:eye-off-sharp"} {...others} />);
}

export default Component;
