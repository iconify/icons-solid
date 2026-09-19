import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/m/m-2h1_bmo.css';
import '../../css/n/nc1sz7b8a.css';
import '../../css/h/hsozfkb8n.css';
import '../../css/y/y6b7sebkb.css';
import '../../css/l/lw0brenux.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="m-2h1_bmo"/><path class="nc1sz7b8a"/><path class="hsozfkb8n"/><path class="y6b7sebkb"/><rect class="lw0brenux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chinese-pavilion"} {...others} />);
}

export default Component;
