import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5xymnzul.css';
import '../../css/y/y1nb_hosg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5xymnzul"/><path class="y1nb_hosg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:edit-filled"} {...others} />);
}

export default Component;
