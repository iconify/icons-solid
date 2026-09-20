import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zra-vibmg.css';
import '../../css/z/z7kmi1b2u.css';
import '../../css/l/ler334eza.css';
import '../../css/d/dnytsxsbo.css';
import '../../css/d/dmsf7xbnd.css';
import '../../css/j/jmo00xjvu.css';
import '../../css/k/k6gm0aapt.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zra-vibmg"/><path class="z7kmi1b2u"/><path clip-rule="evenodd" class="ler334eza"/><path clip-rule="evenodd" class="dnytsxsbo"/><path clip-rule="evenodd" class="dmsf7xbnd"/><path clip-rule="evenodd" class="jmo00xjvu"/><path clip-rule="evenodd" class="k6gm0aapt"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:qr-code-off"} {...others} />);
}

export default Component;
