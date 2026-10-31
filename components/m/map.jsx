import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tr3k9ebqe.css';
import '../../css/b/bsu4lubzw.css';
import '../../css/w/w47ymd4xc.css';
import '../../css/g/gk7n14bah.css';
import '../../css/e/ezsjerdiw.css';
import '../../css/n/n4h-uy5lc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="tr3k9ebqe wm-shadow"/><path class="bsu4lubzw"/><path class="w47ymd4xc"/><path class="gk7n14bah"/><path class="ezsjerdiw"/><path class="n4h-uy5lc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:map"} {...others} />);
}

export default Component;
