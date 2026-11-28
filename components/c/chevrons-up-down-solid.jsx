import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrem8qvbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrem8qvbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:chevrons-up-down-solid"} {...others} />);
}

export default Component;
