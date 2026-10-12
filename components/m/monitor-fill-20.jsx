import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdp7o9mju.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jdp7o9mju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:monitor-fill-20"} {...others} />);
}

export default Component;
