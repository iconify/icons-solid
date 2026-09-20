import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz92cqnqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz92cqnqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:y-skew-line"} {...others} />);
}

export default Component;
