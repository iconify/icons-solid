import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nj7_ueecx.css';
import '../../css/v/v42hvub5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="nj7_ueecx"/><path class="v42hvub5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-down-short-sharp-two-tone"} {...others} />);
}

export default Component;
