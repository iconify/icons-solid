import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc7-p9bkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc7-p9bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:hash-square"} {...others} />);
}

export default Component;
