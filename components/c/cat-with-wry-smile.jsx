import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dme9j2bul.css';
import '../../css/n/nx5x2sbwg.css';
import '../../css/m/mq0xckbbo.css';
import '../../css/y/yk79pekel.css';
import '../../css/z/zl2u-cc5o.css';
import '../../css/p/przwzicfn.css';
import '../../css/t/t36buroud.css';
import '../../css/z/zxcpttgwn.css';
import '../../css/t/t8bxqrbrb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="dme9j2bul"/><path class="nx5x2sbwg"/><path class="mq0xckbbo"/><path class="yk79pekel"/><path class="zl2u-cc5o"/><path class="przwzicfn"/><path class="t36buroud"/><circle class="zxcpttgwn"/><circle class="t8bxqrbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cat-with-wry-smile"} {...others} />);
}

export default Component;
