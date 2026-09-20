import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obbfhkb8u.css';
import '../../css/s/s2jh_ccnr.css';
import '../../css/l/l97y5cb1g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="obbfhkb8u"/><path class="s2jh_ccnr"/><path class="l97y5cb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:missed-call"} {...others} />);
}

export default Component;
