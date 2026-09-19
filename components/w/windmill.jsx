import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk1fx-k4e.css';
import '../../css/g/gt8biccrk.css';
import '../../css/k/kg64bdngn.css';
import '../../css/w/wihudhbam.css';
import '../../css/s/si8zw661w.css';

const viewBox = {"width":48,"height":48};
const content = `<g clip-rule="evenodd" class="tk1fx-k4e"><path class="gt8biccrk"/><path class="kg64bdngn"/><path class="wihudhbam"/><path class="si8zw661w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:windmill"} {...others} />);
}

export default Component;
