import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcxs3hbaw.css';
import '../../css/s/sq3z-9xqp.css';
import '../../css/y/y-e0_cb5m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zcxs3hbaw"/><path class="sq3z-9xqp"/><path class="y-e0_cb5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:closed-captioning"} {...others} />);
}

export default Component;
