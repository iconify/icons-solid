import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gp0egaclj.css';
import '../../css/k/k3jeqtbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="gp0egaclj"/><path class="k3jeqtbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stop-loss-order"} {...others} />);
}

export default Component;
