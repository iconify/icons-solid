import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzruljbnd.css';
import '../../css/a/afwa61bip.css';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/e/e-6gwlbgc.css';
import '../../css/z/zvtckccsz.css';
import '../../css/z/zn51313og.css';
import '../../css/g/gc9nmgbrp.css';
import '../../css/e/e64blsl9x.css';

const viewBox = {"width":300,"height":200};
const content = `<defs><path id="SVGSHtr2pqR" class="rzruljbnd"/><path id="SVG7MeCre4C" class="afwa61bip"/></defs><g class="bi12bsetm"><mask id="SVGuaTyUb5z" class="n1mjunbsu"><use href="#SVGSHtr2pqR"/></mask><g mask="url(#SVGuaTyUb5z)"><path class="e-6gwlbgc"/><path class="zvtckccsz"/><path class="zn51313og"/><mask id="SVGhQXHdbvK" class="n1mjunbsu"><use href="#SVG7MeCre4C"/></mask><path mask="url(#SVGhQXHdbvK)" class="gc9nmgbrp"/><path class="e64blsl9x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:za"} {...others} />);
}

export default Component;
