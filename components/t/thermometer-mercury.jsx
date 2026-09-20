import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01-jxany.css';
import '../../css/e/e7304gbzl.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVGFjSUBeLT" viewBox="0 0 72 168"><circle class="h01-jxany"/><path class="e7304gbzl"/></symbol></defs><use width="72" height="168" href="#SVGFjSUBeLT" transform="translate(220 205)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:thermometer-mercury"} {...others} />);
}

export default Component;
