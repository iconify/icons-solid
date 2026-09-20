import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s-yinckvn.css';
import '../../css/f/flnna2b8j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="s-yinckvn"/><path class="flnna2b8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-open-sharp-fill"} {...others} />);
}

export default Component;
