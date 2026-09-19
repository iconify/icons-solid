import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/uiyabfwxa.css';
import '../../css/g/gr_ff-bih.css';
import '../../css/r/r_kg6lwxt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="uiyabfwxa"/><circle class="gr_ff-bih"/><path class="r_kg6lwxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:people-bottom-card"} {...others} />);
}

export default Component;
