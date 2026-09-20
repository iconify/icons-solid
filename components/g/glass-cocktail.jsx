import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wdq8tft1o.css';
import '../../css/y/yo62u5njc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wdq8tft1o"/><path class="yo62u5njc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:glass-cocktail"} {...others} />);
}

export default Component;
