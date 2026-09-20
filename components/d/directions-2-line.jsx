import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrsc1fbss.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrsc1fbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:directions-2-line"} {...others} />);
}

export default Component;
