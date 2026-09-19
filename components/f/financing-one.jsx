import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vzvm2bciq.css';
import '../../css/b/bf33dpbcm.css';
import '../../css/k/k39afi40k.css';
import '../../css/w/wfqfj4y6d.css';
import '../../css/n/nwx8obb9k.css';
import '../../css/d/dox0yubvu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="vzvm2bciq"/><path class="bf33dpbcm"/><path class="k39afi40k"/><path class="wfqfj4y6d"/><path class="nwx8obb9k"/><path clip-rule="evenodd" class="dox0yubvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:financing-one"} {...others} />);
}

export default Component;
