import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vf7l1bbgj.css';
import '../../css/e/e6-fpwich.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="vf7l1bbgj"/><path class="e6-fpwich"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:volume-off-sharp-fill"} {...others} />);
}

export default Component;
