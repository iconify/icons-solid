import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq9f7vbyh.css';
import '../../css/c/cxo2_0b1m.css';
import '../../css/v/vxkdfcc5t.css';
import '../../css/z/zqvy08uvh.css';
import '../../css/p/przwzicfn.css';
import '../../css/t/t36buroud.css';
import '../../css/z/zxcpttgwn.css';
import '../../css/t/t8bxqrbrb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="sq9f7vbyh"/><path class="cxo2_0b1m"/><path class="vxkdfcc5t"/><path class="zqvy08uvh"/><path class="przwzicfn"/><path class="t36buroud"/><circle class="zxcpttgwn"/><circle class="t8bxqrbrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pouting-cat"} {...others} />);
}

export default Component;
