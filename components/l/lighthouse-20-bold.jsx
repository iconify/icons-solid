import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umeximbue.css';
import '../../css/z/zyqw81bux.css';
import '../../css/r/r98z67v2b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="umeximbue"/><path class="zyqw81bux"/><path class="r98z67v2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lighthouse-20-bold"} {...others} />);
}

export default Component;
