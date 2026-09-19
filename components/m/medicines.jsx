import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x297x5u9w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x297x5u9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:medicines"} {...others} />);
}

export default Component;
