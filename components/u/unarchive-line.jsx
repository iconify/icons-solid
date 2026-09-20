import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3w7q4-ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3w7q4-ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:unarchive-line"} {...others} />);
}

export default Component;
