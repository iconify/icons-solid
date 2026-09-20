import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykp0cwbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ykp0cwbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:sharpness-filled"} {...others} />);
}

export default Component;
