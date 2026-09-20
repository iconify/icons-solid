import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n61os6n_x.css';
import '../../css/s/sdc39209h.css';
import '../../css/n/nv63dpbns.css';
import '../../css/f/fze9j-bld.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n61os6n_x"/><path class="sdc39209h"/><path class="nv63dpbns"/><path class="fze9j-bld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gallery-remove3"} {...others} />);
}

export default Component;
