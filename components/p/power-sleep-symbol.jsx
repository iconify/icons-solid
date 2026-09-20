import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elb82nbbj.css';
import '../../css/a/aewymtpsh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="elb82nbbj"/><path class="aewymtpsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:power-sleep-symbol"} {...others} />);
}

export default Component;
