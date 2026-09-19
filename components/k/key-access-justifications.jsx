import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7sr6ubzr.css';
import '../../css/w/w7lj32blg.css';
import '../../css/j/jd5_yb--g.css';
import '../../css/r/rftnob7cl.css';
import '../../css/g/gkykfdeqm.css';
import '../../css/u/umm606kxf.css';
import '../../css/j/jjui-rbgh.css';
import '../../css/l/l4bu_acsx.css';
import '../../css/j/jqblykt8g.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><clipPath id="SVGdCwl5Mgh"><path class="i7sr6ubzr"/></clipPath></defs><g clip-path="url(#SVGdCwl5Mgh)"><g clip-path="url(#SVGdCwl5Mgh)"><path class="w7lj32blg"/></g><path class="jd5_yb--g"/><g clip-path="url(#SVGdCwl5Mgh)"><path class="rftnob7cl"/></g><path class="gkykfdeqm"/><g clip-path="url(#SVGdCwl5Mgh)" class="umm606kxf"><path class="jjui-rbgh"/><path class="l4bu_acsx"/><path class="jqblykt8g"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:key-access-justifications"} {...others} />);
}

export default Component;
