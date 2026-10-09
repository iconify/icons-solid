import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je7ywpbue.css';
import '../../css/v/v02n93nor.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="je7ywpbue"/><path class="v02n93nor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trending-up-20-bold"} {...others} />);
}

export default Component;
