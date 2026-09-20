import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vy973jzih.css';
import '../../css/s/sotccjbfo.css';
import '../../css/s/sklx66bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="vy973jzih"/><path class="sotccjbfo"/><circle class="sklx66bfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:box-3d-notification"} {...others} />);
}

export default Component;
