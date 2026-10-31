import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r0a2tab4c.css';
import '../../css/q/qvr8eqb-m.css';
import '../../css/g/gnutxejdv.css';
import '../../css/u/u5r21yh2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r0a2tab4c wm-shadow"/><path class="qvr8eqb-m wm-shadow"/><path class="gnutxejdv"/><path class="u5r21yh2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chopsticks"} {...others} />);
}

export default Component;
