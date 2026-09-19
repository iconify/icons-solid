import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g92amxlfl.css';
import '../../css/x/xnz_gs-_g.css';
import '../../css/j/jdh9hhorp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="g92amxlfl"/><path class="xnz_gs-_g"/><path class="jdh9hhorp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:watch"} {...others} />);
}

export default Component;
