import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/amkopibvs.css';
import '../../css/f/fsz-qlp5e.css';
import '../../css/z/zmgukn87m.css';
import '../../css/b/b_rzbvbzp.css';
import '../../css/d/dleid608m.css';
import '../../css/f/fx3041alf.css';
import '../../css/n/nn3xo3b6h.css';
import '../../css/o/o7f-y2b0q.css';
import '../../css/e/e3fsewyjy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/oxfr4d88j.css';
import '../../css/g/gs8ea2bbe.css';
import '../../css/w/w-yz-xbqc.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGxXAsmdZC" class="amkopibvs"/></defs><path class="fsz-qlp5e"/><g class="zmgukn87m"><path class="b_rzbvbzp"/><path class="dleid608m"/></g><path class="fx3041alf"/><path class="nn3xo3b6h"/><path class="o7f-y2b0q"/><use href="#SVGxXAsmdZC" class="e3fsewyjy"/><use href="#SVGxXAsmdZC" class="e3fsewyjy"/><g class="jn8qy4bru"><path class="oxfr4d88j"/><path class="gs8ea2bbe"/><path class="w-yz-xbqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:diving-mask"} {...others} />);
}

export default Component;
