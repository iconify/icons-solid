import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/l/lahxv7d0q.css';
import '../../css/f/fss_mgeok.css';
import '../../css/w/wwhpzomcr.css';
import '../../css/i/immgo8onp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="lahxv7d0q"/><path class="fss_mgeok wm-shine"/><path class="wm-k wwhpzomcr"/><path class="immgo8onp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-donut"} {...others} />);
}

export default Component;
