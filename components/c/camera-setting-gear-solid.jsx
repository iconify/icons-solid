import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwo6jxbkm.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="iwo6jxbkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:camera-setting-gear-solid"} {...others} />);
}

export default Component;
