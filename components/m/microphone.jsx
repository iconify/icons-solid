import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6u0kfq8u.css';
import '../../css/m/mytk_qdsu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k6u0kfq8u"/><path class="mytk_qdsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:microphone"} {...others} />);
}

export default Component;
