import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdo2oulen.css';
import '../../css/n/nfkakzbeb.css';
import '../../css/q/qd5b0vbwc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hdo2oulen"/><path class="nfkakzbeb"/><path class="qd5b0vbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:rules"} {...others} />);
}

export default Component;
