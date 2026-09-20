import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egqkt_b7m.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><symbol id="SVG7V8H0dgo" viewBox="0 0 96 176"><path class="egqkt_b7m"><animate id="SVGbxDaaeoE" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"/></path></symbol></defs><use width="96" height="176" href="#SVG7V8H0dgo" transform="translate(190.13 132.72)scale(1.36)"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:lightning-bolt"} {...others} />);
}

export default Component;
