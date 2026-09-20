import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovbmp5yxh.css';
import '../../css/y/yt306rbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ovbmp5yxh"/><path class="yt306rbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:system-search-filled"} {...others} />);
}

export default Component;
