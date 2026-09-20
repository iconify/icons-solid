import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/w/wel3ij-ab.css';
import '../../css/u/ur0kqubed.css';
import '../../css/s/sp3ujwwyq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="wel3ij-ab"/><path class="ur0kqubed"/><path class="sp3ujwwyq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bot-off-sharp-fill"} {...others} />);
}

export default Component;
