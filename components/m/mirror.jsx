import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/it2ikgbwq.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eerv4xbeo.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGcz36tc4C" class="it2ikgbwq"/></defs><g class="ft5dv1b6b"><use href="#SVGcz36tc4C"/><path class="eerv4xbeo"/><use href="#SVGcz36tc4C" class="p_3zmsvya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mirror"} {...others} />);
}

export default Component;
