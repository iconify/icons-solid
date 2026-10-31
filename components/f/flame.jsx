import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g4rc2qi1x.css';
import '../../css/g/gg0h0vc1g.css';
import '../../css/t/t7imrj2xh.css';
import '../../css/w/wg-junber.css';
import '../../css/b/b9xbrnbjw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="g4rc2qi1x wm-shadow"/><path class="gg0h0vc1g wm-shadow"/><path class="t7imrj2xh"/><path class="wg-junber"/><path class="b9xbrnbjw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:flame"} {...others} />);
}

export default Component;
