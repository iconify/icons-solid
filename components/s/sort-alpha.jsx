import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hjo1he0av.css';
import '../../css/q/qd1g9obrp.css';
import '../../css/o/o6s2xc_ss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hjo1he0av wm-shadow"/><path class="qd1g9obrp wm-shadow"/><path class="o6s2xc_ss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:sort-alpha"} {...others} />);
}

export default Component;
