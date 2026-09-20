import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1q2rmeog.css';
import '../../css/g/g-u_mybju.css';
import '../../css/q/qs94uiuvh.css';
import '../../css/w/wqkclfbxl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j1q2rmeog"/><path class="g-u_mybju"/><path class="qs94uiuvh"/><path class="wqkclfbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronicscd-disk"} {...others} />);
}

export default Component;
