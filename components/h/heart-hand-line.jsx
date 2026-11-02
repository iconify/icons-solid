import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8_4fpbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i8_4fpbsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:heart-hand-line"} {...others} />);
}

export default Component;
