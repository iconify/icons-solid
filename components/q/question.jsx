import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4n1yqnky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j4n1yqnky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:question"} {...others} />);
}

export default Component;
