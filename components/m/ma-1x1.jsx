import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om6z7p6bj.css';
import '../../css/d/dy3-7pbwv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="om6z7p6bj"/><path class="dy3-7pbwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ma-1x1"} {...others} />);
}

export default Component;
