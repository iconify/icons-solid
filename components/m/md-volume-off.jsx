import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/haqwjhbxe.css';
import '../../css/t/thr3k1uvl.css';
import '../../css/h/hvl7cfmte.css';
import '../../css/k/kihdqmbjc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="haqwjhbxe"/><path class="thr3k1uvl"/><path class="hvl7cfmte"/><path class="kihdqmbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-volume-off"} {...others} />);
}

export default Component;
