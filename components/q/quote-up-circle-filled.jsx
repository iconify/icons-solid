import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-t85g_vj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y-t85g_vj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:quote-up-circle-filled"} {...others} />);
}

export default Component;
