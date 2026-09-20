import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/r/r662-tbkw.css';
import '../../css/g/gi50c-bpp.css';
import '../../css/l/l8pfa5b4c.css';
import '../../css/f/fo42_t2xf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="r662-tbkw"/><path class="gi50c-bpp"/><path class="l8pfa5b4c"/><path class="fo42_t2xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:hand-washing"} {...others} />);
}

export default Component;
