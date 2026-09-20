import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/ze2r_i9qx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ze2r_i9qx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-f-waves-solid"} {...others} />);
}

export default Component;
