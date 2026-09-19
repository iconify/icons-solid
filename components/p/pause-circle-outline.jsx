import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyghm0w-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyghm0w-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:pause-circle-outline"} {...others} />);
}

export default Component;
