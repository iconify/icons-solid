import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/e93g5db7v.css';
import '../../css/d/dmixchb_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="e93g5db7v"/><path class="dmixchb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:computer-pc-4"} {...others} />);
}

export default Component;
