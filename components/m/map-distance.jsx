import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/i/i40tr9byn.css';
import '../../css/n/n236c5tao.css';
import '../../css/g/goy6owbsv.css';
import '../../css/g/g8rb58bfp.css';
import '../../css/l/lhui643ek.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="i40tr9byn"/><path class="n236c5tao"/><path class="goy6owbsv"/><path class="g8rb58bfp"/><path class="lhui643ek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:map-distance"} {...others} />);
}

export default Component;
