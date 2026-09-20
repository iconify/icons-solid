import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whqq3tgkh.css';
import '../../css/g/gv56llbfh.css';
import '../../css/m/m42kwr70q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="whqq3tgkh"/><path class="gv56llbfh"/><path class="m42kwr70q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-wrench-1"} {...others} />);
}

export default Component;
