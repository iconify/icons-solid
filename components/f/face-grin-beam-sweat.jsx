import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3_frb7dp.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="k3_frb7dp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:face-grin-beam-sweat"} {...others} />);
}

export default Component;
