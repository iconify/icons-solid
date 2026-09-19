import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwkz0ubat.css';
import '../../css/p/pdr27mb-r.css';
import '../../css/u/urjikp5mw.css';
import '../../css/w/w7aci6c0g.css';
import '../../css/e/e2snt8beq.css';
import '../../css/g/g6wajrb5k.css';
import '../../css/k/kf1u_z13e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zwkz0ubat"/><path class="pdr27mb-r"/><path class="urjikp5mw"/><path class="w7aci6c0g"/><path class="e2snt8beq"/><path class="g6wajrb5k"/><path class="kf1u_z13e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hot-air-balloon"} {...others} />);
}

export default Component;
