import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gswui7bln.css';
import '../../css/m/me30y_b5i.css';
import '../../css/w/w-jdeqbml.css';
import '../../css/w/wy9bh88ns.css';
import '../../css/q/qp3jsulyq.css';
import '../../css/q/q43to0bua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gswui7bln"/><path class="me30y_b5i"/><path class="w-jdeqbml"/><path class="wy9bh88ns"/><path class="qp3jsulyq"/><path class="q43to0bua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:award-badge-star"} {...others} />);
}

export default Component;
