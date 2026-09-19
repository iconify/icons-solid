import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/r/rmp-s2bha.css';
import '../../css/p/pkeysccqz.css';
import '../../css/d/dp5zhybuh.css';
import '../../css/a/alc06qbbb.css';
import '../../css/i/iemg7rbcn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="rmp-s2bha"/><path class="pkeysccqz"/><path class="dp5zhybuh"/><circle class="alc06qbbb"/><path class="iemg7rbcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vacuum-cleaner"} {...others} />);
}

export default Component;
