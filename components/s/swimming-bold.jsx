import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6-bybb5v.css';
import '../../css/j/jfhqsv3mp.css';
import '../../css/q/qddp9ybsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s6-bybb5v"/><path class="jfhqsv3mp"/><path class="qddp9ybsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:swimming-bold"} {...others} />);
}

export default Component;
