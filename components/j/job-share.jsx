import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d-fru41ev.css';
import '../../css/w/w-_vjnana.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="d-fru41ev"/><path class="w-_vjnana"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:job-share"} {...others} />);
}

export default Component;
