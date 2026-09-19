import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1fp4ibvq.css';

const viewBox = {"width":504,"height":512};
const content = `<path class="v1fp4ibvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:grin-beam-sweat"} {...others} />);
}

export default Component;
