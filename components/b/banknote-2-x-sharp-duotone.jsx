import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lzr69co-j.css';
import '../../css/c/ctwn8q7dy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="lzr69co-j"/><path class="ctwn8q7dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:banknote-2-x-sharp-duotone"} {...others} />);
}

export default Component;
