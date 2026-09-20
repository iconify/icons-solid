import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_1tuyjpg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="j_1tuyjpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:phone-down-above-nine-nine-nine"} {...others} />);
}

export default Component;
