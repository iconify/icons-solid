import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjp2ig6jr.css';
import '../../css/m/mch78aboz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qjp2ig6jr"/><path class="mch78aboz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:school"} {...others} />);
}

export default Component;
