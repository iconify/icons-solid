import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh_w0ccwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xh_w0ccwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:clean-broom-wipe"} {...others} />);
}

export default Component;
