import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to19wsb8i.css';
import '../../css/v/vjo9wlbzp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="to19wsb8i"/><path class="vjo9wlbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:meteor"} {...others} />);
}

export default Component;
