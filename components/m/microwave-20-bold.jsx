import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grlqybb5l.css';
import '../../css/q/q4-kh7ybm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="grlqybb5l"/><path class="q4-kh7ybm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:microwave-20-bold"} {...others} />);
}

export default Component;
