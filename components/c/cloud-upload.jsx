import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/h/hflcmzrer.css';
import '../../css/z/zcdwyyb5f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="hflcmzrer"/><path class="zcdwyyb5f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cloud-upload"} {...others} />);
}

export default Component;
