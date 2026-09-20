import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qu2xfw57n.css';
import '../../css/f/fkuq9sbnb.css';
import '../../css/d/dvd6fwb9u.css';
import '../../css/e/e3fsewyjy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/eta_rgbti.css';
import '../../css/f/fxd_5cb_u.css';
import '../../css/v/vq_mh5bcw.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGn32jdsrg" class="qu2xfw57n"/></defs><g class="fkuq9sbnb"><use href="#SVGn32jdsrg" class="dvd6fwb9u"/><use href="#SVGn32jdsrg" class="e3fsewyjy"/></g><g class="jn8qy4bru"><path class="eta_rgbti"/><path class="fxd_5cb_u"/></g><path class="vq_mh5bcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:knee-pain"} {...others} />);
}

export default Component;
