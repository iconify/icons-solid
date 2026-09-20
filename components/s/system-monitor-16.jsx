import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-1idhbof.css';
import '../../css/j/jodh5db0p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j-1idhbof"/><path clip-rule="evenodd" class="jodh5db0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:system-monitor-16"} {...others} />);
}

export default Component;
