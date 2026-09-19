import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn_s5h0rr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fn_s5h0rr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:weight-scale"} {...others} />);
}

export default Component;
