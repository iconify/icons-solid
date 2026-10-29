import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrlfh1-kd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrlfh1-kd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:magnet"} {...others} />);
}

export default Component;
