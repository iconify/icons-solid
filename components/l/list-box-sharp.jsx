import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn5ole7cq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qn5ole7cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:list-box-sharp"} {...others} />);
}

export default Component;
