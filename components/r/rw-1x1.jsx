import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wmynnf2ba.css';
import '../../css/e/et7-6obok.css';
import '../../css/q/q8ecdyxuc.css';
import '../../css/t/tw9urjbjf.css';
import '../../css/o/ovjgq6z9l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wmynnf2ba"/><path class="et7-6obok"/><path class="q8ecdyxuc"/><g transform="translate(374.4 133.8)scale(.7111)"><g id="SVGPMsh0d7b"><path id="SVGAjpHmdCJ" class="tw9urjbjf"/><use width="100%" height="100%" href="#SVGAjpHmdCJ" transform="scale(1 -1)"/></g><use width="100%" height="100%" href="#SVGPMsh0d7b" transform="scale(-1 1)"/><circle class="ovjgq6z9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:rw-1x1"} {...others} />);
}

export default Component;
