import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bv_1knjic.css';
import '../../css/y/yq0zo9bus.css';
import '../../css/e/es3vfqb9k.css';
import '../../css/k/kyr5awbst.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bv_1knjic"/><path class="yq0zo9bus"/><path class="es3vfqb9k"/><path class="kyr5awbst"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:police-car-light"} {...others} />);
}

export default Component;
