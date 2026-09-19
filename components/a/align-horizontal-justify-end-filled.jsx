import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olh7nccxm.css';
import '../../css/m/m0esjaiqj.css';
import '../../css/j/jhkw66bqk.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="olh7nccxm"/><rect class="m0esjaiqj"/><path class="jhkw66bqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-horizontal-justify-end-filled"} {...others} />);
}

export default Component;
