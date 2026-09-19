import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lz9qfxb6b.css';
import '../../css/v/v9almc-9r.css';
import '../../css/u/u0l9fhfjn.css';
import '../../css/l/lfijr0r5r.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lz9qfxb6b"/><path class="v9almc-9r"/><path class="u0l9fhfjn"/><path class="lfijr0r5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:sliders"} {...others} />);
}

export default Component;
