import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oke2z0zmw.css';
import '../../css/n/nucwd3bqb.css';
import '../../css/k/k4p8h_hqp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="oke2z0zmw"/><path class="nucwd3bqb"/><path class="k4p8h_hqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:growingheart"} {...others} />);
}

export default Component;
