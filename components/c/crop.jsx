import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_uz53-xm.css';
import '../../css/g/g_a2zwbci.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="l_uz53-xm"/><path class="g_a2zwbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:crop"} {...others} />);
}

export default Component;
