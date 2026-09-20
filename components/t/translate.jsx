import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zeuusybaq.css';
import '../../css/d/d38qlsbag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zeuusybaq"/><path class="d38qlsbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:translate"} {...others} />);
}

export default Component;
