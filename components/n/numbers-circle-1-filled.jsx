import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv_r-fwua.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vv_r-fwua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:numbers-circle-1-filled"} {...others} />);
}

export default Component;
