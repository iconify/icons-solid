import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fg0oqp0gx.css';
import '../../css/g/gz_xjvbwh.css';
import '../../css/k/ke47qybaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fg0oqp0gx"/><path class="gz_xjvbwh"/><path class="ke47qybaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:box-minimalistic-bold"} {...others} />);
}

export default Component;
