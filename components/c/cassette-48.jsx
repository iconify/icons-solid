import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq88i7qnu.css';
import '../../css/c/c_5vdvbsq.css';
import '../../css/o/oqui6zsbr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zq88i7qnu"/><path class="c_5vdvbsq"/><path class="oqui6zsbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cassette-48"} {...others} />);
}

export default Component;
