import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y_8vrqbuh.css';
import '../../css/w/w5mcuabez.css';
import '../../css/h/hh_52gblb.css';
import '../../css/w/wcj2ejq7s.css';
import '../../css/j/je2yz0j7x.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y_8vrqbuh"/><path class="w5mcuabez"/><path class="hh_52gblb"/><path class="wcj2ejq7s"/><path class="je2yz0j7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:identification-card"} {...others} />);
}

export default Component;
