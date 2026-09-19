import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3p1ybc1b.css';
import '../../css/h/hbi9ybcmr.css';
import '../../css/e/efflzubsz.css';
import '../../css/m/m8e1pfb5x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="e3p1ybc1b"><path class="hbi9ybcmr"/><path class="efflzubsz"/><path class="m8e1pfb5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:curling"} {...others} />);
}

export default Component;
