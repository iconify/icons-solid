import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l4ggnilhl.css';
import '../../css/w/w126x-bki.css';
import '../../css/p/pg-nxbcqk.css';
import '../../css/r/ryjl4zfqc.css';
import '../../css/n/nz3n8fqex.css';
import '../../css/b/bmss8qbog.css';
import '../../css/m/mxy_pvi_g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="l4ggnilhl"/><path class="w126x-bki"/><path class="pg-nxbcqk"/><path class="ryjl4zfqc"/><path class="nz3n8fqex"/><path class="bmss8qbog"/><path class="mxy_pvi_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:alarm"} {...others} />);
}

export default Component;
