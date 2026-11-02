import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw33au4cn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lw33au4cn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:first-aid-kit-line"} {...others} />);
}

export default Component;
