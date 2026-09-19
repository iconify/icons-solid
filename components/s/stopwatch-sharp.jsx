import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuvg6_w_p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iuvg6_w_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:stopwatch-sharp"} {...others} />);
}

export default Component;
