import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu1g5acvh.css';
import '../../css/k/kq1i8jlgx.css';
import '../../css/q/qbfao4-vr.css';
import '../../css/r/rbqpjolra.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bu1g5acvh"/><path class="kq1i8jlgx"/><path class="qbfao4-vr"/><path class="rbqpjolra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:newspaper-outline"} {...others} />);
}

export default Component;
