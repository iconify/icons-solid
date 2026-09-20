import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lh_k01j4o.css';
import '../../css/f/fjfmq7bqz.css';
import '../../css/l/l358m5-ci.css';
import '../../css/k/kexjgsbht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lh_k01j4o"/><path class="fjfmq7bqz"/><path class="l358m5-ci"/><path class="kexjgsbht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:roller-paintbrush"} {...others} />);
}

export default Component;
