import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pydq-vbvu.css';
import '../../css/m/ms4v69bop.css';
import '../../css/n/ndaxmsbun.css';
import '../../css/a/av_rlixxg.css';
import '../../css/y/yzvi0j1dn.css';
import '../../css/o/ocj4oxbgz.css';
import '../../css/d/d_5-19mvg.css';
import '../../css/f/f30szflvl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pydq-vbvu"/><path clip-rule="evenodd" class="ms4v69bop"/><path class="ndaxmsbun"/><path class="av_rlixxg"/><path class="yzvi0j1dn"/><path class="ocj4oxbgz"/><path class="d_5-19mvg"/><path class="f30szflvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:trolleybus"} {...others} />);
}

export default Component;
