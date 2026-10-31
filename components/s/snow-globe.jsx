import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tpljgu7kw.css';
import '../../css/b/bsb5iq0hd.css';
import '../../css/b/b_ie9gd9e.css';
import '../../css/n/nlwlo6r6i.css';
import '../../css/a/ankuhdc7m.css';
import '../../css/v/vqy6pwb4o.css';
import '../../css/h/hqrrnbx2c.css';
import '../../css/g/g93eakgkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tpljgu7kw wm-shadow"/><path class="bsb5iq0hd"/><path class="b_ie9gd9e"/><path class="nlwlo6r6i"/><path class="ankuhdc7m"/><path class="vqy6pwb4o"/><path class="hqrrnbx2c wm-deco"/><path class="g93eakgkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:snow-globe"} {...others} />);
}

export default Component;
