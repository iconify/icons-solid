import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y576glb9g.css';
import '../../css/a/ajdr2dz1w.css';
import '../../css/z/z30wqlwgo.css';
import '../../css/l/lskjy3bhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k y576glb9g"/><path class="ajdr2dz1w wm-a"/><path class="wm-shadow z30wqlwgo"/><path class="lskjy3bhz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:library-engrave"} {...others} />);
}

export default Component;
