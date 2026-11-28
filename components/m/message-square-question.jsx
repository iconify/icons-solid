import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvh0v82tz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvh0v82tz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:message-square-question"} {...others} />);
}

export default Component;
