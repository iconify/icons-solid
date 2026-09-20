import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrtx0ebqp.css';
import '../../css/a/a74kpfbuc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zrtx0ebqp"/><path class="a74kpfbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tradetally"} {...others} />);
}

export default Component;
