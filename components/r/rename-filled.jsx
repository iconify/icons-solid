import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxf4odbtj.css';
import '../../css/k/k17ecxb8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxf4odbtj"/><path class="k17ecxb8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rename-filled"} {...others} />);
}

export default Component;
