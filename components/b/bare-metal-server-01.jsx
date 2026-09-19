import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfnz8351n.css';
import '../../css/y/y8mkib1ak.css';
import '../../css/r/rs7rz-b0d.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zfnz8351n"/><circle class="y8mkib1ak"/><path class="rs7rz-b0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bare-metal-server-01"} {...others} />);
}

export default Component;
