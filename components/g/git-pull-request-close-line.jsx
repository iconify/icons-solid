import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yp7_1q3hr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yp7_1q3hr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:git-pull-request-close-line"} {...others} />);
}

export default Component;
