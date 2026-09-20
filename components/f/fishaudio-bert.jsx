import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/a/ak6y2c_dv.css';
import '../../css/m/mw_7fybnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nx5d-bc1s"><path class="ak6y2c_dv"/><path class="mw_7fybnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:fishaudio-bert"} {...others} />);
}

export default Component;
