import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bkcd5iben.css';
import '../../css/b/by26kkbis.css';
import '../../css/s/slpk0qbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="bkcd5iben"/><path class="by26kkbis"/><path class="slpk0qbtn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-align-offset-left-sharp-two-tone"} {...others} />);
}

export default Component;
