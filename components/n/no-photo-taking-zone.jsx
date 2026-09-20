import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/lw629196w.css';
import '../../css/q/qy6mm5b9k.css';
import '../../css/m/m3squ5b0c.css';
import '../../css/i/i9krccccc.css';
import '../../css/q/q3k19_99h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="lw629196w"/><path class="qy6mm5b9k"/><path class="m3squ5b0c"/><path class="i9krccccc"/><path class="q3k19_99h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:no-photo-taking-zone"} {...others} />);
}

export default Component;
