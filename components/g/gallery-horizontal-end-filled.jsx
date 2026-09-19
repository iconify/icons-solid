import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7_lms_6w.css';
import '../../css/v/vbpiltbkp.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="t7_lms_6w"/><path class="vbpiltbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gallery-horizontal-end-filled"} {...others} />);
}

export default Component;
