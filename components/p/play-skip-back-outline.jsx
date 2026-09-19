import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tj5m3bbfz.css';
import '../../css/z/ziaiz_9lq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tj5m3bbfz"/><path class="ziaiz_9lq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:play-skip-back-outline"} {...others} />);
}

export default Component;
