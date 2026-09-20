import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2mzgicbz.css';
import '../../css/h/h48rmab4l.css';
import '../../css/t/t1hj47b2i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b2mzgicbz"/><path class="h48rmab4l"/><path class="t1hj47b2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dockflare-light"} {...others} />);
}

export default Component;
