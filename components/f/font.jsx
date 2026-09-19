import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oha6hnoud.css';
import '../../css/c/c8_pid-oz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oha6hnoud"/><path class="c8_pid-oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:font"} {...others} />);
}

export default Component;
