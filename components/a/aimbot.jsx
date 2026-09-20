import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byh9a7b9q.css';
import '../../css/q/qenz11sno.css';
import '../../css/j/ji6z7ccwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="byh9a7b9q"/><path class="qenz11sno"/><path class="ji6z7ccwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:aimbot"} {...others} />);
}

export default Component;
