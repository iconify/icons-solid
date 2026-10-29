import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gmbflft4k.css';
import '../../css/f/f89k2z5wg.css';
import '../../css/j/j3ol6op_o.css';
import '../../css/z/zsyl3z0it.css';
import '../../css/y/yqv-yyj9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="gmbflft4k wm-k"/><path class="f89k2z5wg wm-a"/><path class="j3ol6op_o"/><path class="zsyl3z0it"/><path class="wm-s yqv-yyj9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:satellite"} {...others} />);
}

export default Component;
