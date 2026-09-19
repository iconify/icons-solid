import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftn7tacln.css';
import '../../css/a/am_yeab8m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ftn7tacln"/><path class="am_yeab8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:face-activated-add"} {...others} />);
}

export default Component;
