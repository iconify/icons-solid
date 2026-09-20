import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b8z23pe4m.css';
import '../../css/j/j6nfug34l.css';
import '../../css/v/v2h-64b7s.css';
import '../../css/h/h0y1y9b6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b8z23pe4m"/><path class="j6nfug34l"/><path class="v2h-64b7s"/><path class="h0y1y9b6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:play-demo"} {...others} />);
}

export default Component;
