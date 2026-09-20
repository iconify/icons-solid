import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha_hsdf3i.css';
import '../../css/z/zfb6-85zp.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ha_hsdf3i"/><path clip-rule="evenodd" class="zfb6-85zp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:print-preview-16"} {...others} />);
}

export default Component;
