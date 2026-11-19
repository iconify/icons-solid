import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sdlti5yes.css';
import '../../css/o/oq5dh1_ib.css';
import '../../css/o/o01iqbc4j.css';
import '../../css/i/izb20nb-l.css';
import '../../css/n/n7ru0qb3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sdlti5yes"/><path class="oq5dh1_ib"/><path class="o01iqbc4j"/><path class="izb20nb-l"/><path class="n7ru0qb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:server-in"} {...others} />);
}

export default Component;
