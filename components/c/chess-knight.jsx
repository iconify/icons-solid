import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_aqgklkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_aqgklkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chess-knight"} {...others} />);
}

export default Component;
