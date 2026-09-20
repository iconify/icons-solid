import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kf6ykxbpu.css';
import '../../css/x/x7mpwpjvl.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVGVD1XseCd" viewBox="0 0 203 203"><path class="kf6ykxbpu"/></symbol></defs><path class="x7mpwpjvl"/><use width="203" height="203" href="#SVGVD1XseCd" transform="translate(154.5 134.5)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 96.24 96.24; 9 96.24 96.24; -15 96.24 96.24"/></use>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:time-late-night"} {...others} />);
}

export default Component;
