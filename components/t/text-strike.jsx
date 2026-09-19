import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8_pid-oz.css';
import '../../css/r/rj-fah6et.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c8_pid-oz"/><path class="rj-fah6et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:text-strike"} {...others} />);
}

export default Component;
