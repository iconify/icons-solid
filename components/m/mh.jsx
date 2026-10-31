import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u67outbro.css';
import '../../css/i/ioy0_ipfo.css';
import '../../css/c/cn7690m9e.css';
import '../../css/a/agg19ktfo.css';

const viewBox = {"width":302,"height":160};
const content = `<g class="ft5dv1b6b"><path class="u67outbro"/><path class="ioy0_ipfo"/><path class="cn7690m9e"/><path class="agg19ktfo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mh"} {...others} />);
}

export default Component;
