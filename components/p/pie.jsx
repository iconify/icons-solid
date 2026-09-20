import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rp_f6gbzm.css';
import '../../css/q/qp5hhjbxf.css';
import '../../css/r/r9f97sbnp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rp_f6gbzm"/><path class="qp5hhjbxf"/><path class="r9f97sbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pie"} {...others} />);
}

export default Component;
