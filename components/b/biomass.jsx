import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pd5phjuic.css';
import '../../css/m/mpxcuqwrx.css';
import '../../css/p/pq5wpqray.css';
import '../../css/x/x9g3gmb-m.css';
import '../../css/i/ixnnopbsp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pd5phjuic"/><path class="mpxcuqwrx"/><path class="pq5wpqray"/><path class="x9g3gmb-m"/><path class="ixnnopbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:biomass"} {...others} />);
}

export default Component;
