import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkxrg8bqx.css';
import '../../css/v/vcwbpi0dq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dkxrg8bqx"/><path class="vcwbpi0dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:screencast-filled"} {...others} />);
}

export default Component;
