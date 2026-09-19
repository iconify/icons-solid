import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6_yl3b8x.css';
import '../../css/e/e8w1e_bsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s6_yl3b8x"/><path class="e8w1e_bsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:envelope-open-solid"} {...others} />);
}

export default Component;
