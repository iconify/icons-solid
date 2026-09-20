import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvudebc2k.css';
import '../../css/v/v7l80ac5d.css';
import '../../css/h/h4_dhqi7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="tvudebc2k"/><path class="v7l80ac5d"/><path class="h4_dhqi7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-compare-arrows-sharp-two-tone"} {...others} />);
}

export default Component;
