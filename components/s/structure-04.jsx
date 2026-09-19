import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/we8_5pd4y.css';
import '../../css/r/r0j9gsn7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="we8_5pd4y"/><path class="r0j9gsn7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:structure-04"} {...others} />);
}

export default Component;
