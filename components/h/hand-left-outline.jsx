import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvt1q9bhv.css';
import '../../css/j/jp9nm159y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lvt1q9bhv"/><path class="jp9nm159y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:hand-left-outline"} {...others} />);
}

export default Component;
