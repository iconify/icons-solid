import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cy2bjt61c.css';
import '../../css/m/mubborb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cy2bjt61c"/><path class="mubborb8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-money-02"} {...others} />);
}

export default Component;
