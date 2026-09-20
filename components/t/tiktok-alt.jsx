import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd3nyebrt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jd3nyebrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:tiktok-alt"} {...others} />);
}

export default Component;
