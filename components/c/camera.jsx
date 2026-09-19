import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/y/yqwp33b_f.css';
import '../../css/m/mezodq4vs.css';
import '../../css/v/vr0thfpje.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="yqwp33b_f"/><rect class="mezodq4vs"/><path class="vr0thfpje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:camera"} {...others} />);
}

export default Component;
