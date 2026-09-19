import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vefu94b2l.css';

const viewBox = {"width":288,"height":512};
const content = `<path class="vefu94b2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:mars-stroke-v"} {...others} />);
}

export default Component;
