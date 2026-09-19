import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jfrb4p-aj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jfrb4p-aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:magnet"} {...others} />);
}

export default Component;
