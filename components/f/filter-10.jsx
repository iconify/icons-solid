import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/fjbu-658d.css';
import '../../css/j/jnuf-1vzk.css';
import '../../css/q/qc_mf2byd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="fjbu-658d"/><path class="jnuf-1vzk"/><path class="qc_mf2byd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:filter-10"} {...others} />);
}

export default Component;
