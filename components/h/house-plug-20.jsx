import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpx9c7b2s.css';
import '../../css/p/pc2anacvy.css';
import '../../css/h/hkv3ewbfw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rpx9c7b2s"/><path class="pc2anacvy"/><path class="hkv3ewbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-plug-20"} {...others} />);
}

export default Component;
