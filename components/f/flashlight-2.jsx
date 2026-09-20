import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_u4uzbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_u4uzbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:flashlight-2"} {...others} />);
}

export default Component;
