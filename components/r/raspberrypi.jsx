import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6hkc5b2j.css';
import '../../css/o/op2gjqblh.css';
import '../../css/x/xmd1k6ysb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="g6hkc5b2j"/><path class="op2gjqblh"/><path class="xmd1k6ysb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:raspberrypi"} {...others} />);
}

export default Component;
