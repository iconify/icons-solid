import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd7_z4a6q.css';
import '../../css/p/p52vwxbxp.css';
import '../../css/d/dqns40q9s.css';
import '../../css/e/e5-ftqssm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qd7_z4a6q"/><path class="p52vwxbxp"/><path class="dqns40q9s"/><path class="e5-ftqssm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:root-vegetable"} {...others} />);
}

export default Component;
