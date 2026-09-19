import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5mv57n7i.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="s5mv57n7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:playback-rate-1x"} {...others} />);
}

export default Component;
