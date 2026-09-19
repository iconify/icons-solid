import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw9rmcz9o.css';
import '../../css/m/m4l6-obyg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="aw9rmcz9o"/><path class="m4l6-obyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:at-1x1"} {...others} />);
}

export default Component;
