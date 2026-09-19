import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l45ggi9uq.css';
import '../../css/e/e--nwwbsr.css';
import '../../css/n/nrxg6vohj.css';
import '../../css/m/mgzidzb1s.css';
import '../../css/o/opm2e_0wh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="l45ggi9uq"/><path class="e--nwwbsr"/><path class="nrxg6vohj"/><path class="mgzidzb1s"/><path class="opm2e_0wh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:handheld"} {...others} />);
}

export default Component;
