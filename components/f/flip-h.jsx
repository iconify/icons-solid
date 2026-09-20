import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm8d2ebpn.css';
import '../../css/g/grqo4obbk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rm8d2ebpn"/><path class="grqo4obbk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:flip-h"} {...others} />);
}

export default Component;
