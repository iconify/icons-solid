import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qbcs2xgch.css';
import '../../css/u/uk-eumb3f.css';
import '../../css/h/hplz24bws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="qbcs2xgch"/><path class="uk-eumb3f"/><path class="hplz24bws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-indian-rupee-sharp-two-tone"} {...others} />);
}

export default Component;
