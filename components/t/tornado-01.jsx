import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g-msk4u0h.css';
import '../../css/p/p52c-8bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g-msk4u0h"/><path class="p52c-8bcn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:tornado-01"} {...others} />);
}

export default Component;
