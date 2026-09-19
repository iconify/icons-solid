import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/r/r0jc4nb2c.css';
import '../../css/o/ozkimraap.css';
import '../../css/i/i0t300eil.css';
import '../../css/a/ax014-bet.css';
import '../../css/r/r8m2p7xvr.css';
import '../../css/r/rebpqvbrp.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="r0jc4nb2c"/><path class="ozkimraap"/><path class="i0t300eil"/><path class="ax014-bet"/><path class="r8m2p7xvr"/><path class="rebpqvbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:data"} {...others} />);
}

export default Component;
