import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mghtvdb9z.css';
import '../../css/s/s_h41w30n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mghtvdb9z"/><path class="s_h41w30n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:code-orange"} {...others} />);
}

export default Component;
