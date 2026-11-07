import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9kk-diig.css';
import '../../css/j/j7y39ibwz.css';
import '../../css/r/r7zem_bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x9kk-diig"/><path class="j7y39ibwz"/><path class="r7zem_bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:fuel-bold-duotone"} {...others} />);
}

export default Component;
