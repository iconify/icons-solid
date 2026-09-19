import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do713mb7p.css';
import '../../css/w/wft5owbny.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="do713mb7p"/><path class="wft5owbny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:frustrated2"} {...others} />);
}

export default Component;
