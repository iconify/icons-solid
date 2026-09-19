import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_rd8mbkk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_rd8mbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:venus-flytrap"} {...others} />);
}

export default Component;
