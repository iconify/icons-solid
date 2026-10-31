import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/amzweirzo.css';
import '../../css/h/hfdlftbfd.css';
import '../../css/s/sppkj1sfz.css';
import '../../css/e/efzxyzb1i.css';
import '../../css/x/xa3w6fwce.css';
import '../../css/w/wd0-cz21h.css';
import '../../css/z/zfax1vbca.css';
import '../../css/k/ktfjgbc-g.css';
import '../../css/j/jknmelb_y.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="bi12bsetm"><path class="amzweirzo"/><path class="hfdlftbfd"/><path class="sppkj1sfz"/><path class="efzxyzb1i"/><path class="xa3w6fwce"/><path class="wd0-cz21h"/><path class="zfax1vbca"/><path class="ktfjgbc-g"/><path class="jknmelb_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:ao"} {...others} />);
}

export default Component;
