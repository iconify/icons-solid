import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl_5e3bdj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cl_5e3bdj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:expand-2"} {...others} />);
}

export default Component;
