import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihnlsybak.css';
import '../../css/n/nncaqob0h.css';
import '../../css/s/sspjfbb1z.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ihnlsybak"/><path clip-rule="evenodd" class="nncaqob0h"/><path clip-rule="evenodd" class="sspjfbb1z"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:studio-light-front-off"} {...others} />);
}

export default Component;
