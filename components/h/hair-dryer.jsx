import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/orqm88b8k.css';
import '../../css/f/fhyknpbnv.css';
import '../../css/z/zr0h6scca.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="orqm88b8k"/><path class="fhyknpbnv"/><path class="zr0h6scca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:hair-dryer"} {...others} />);
}

export default Component;
