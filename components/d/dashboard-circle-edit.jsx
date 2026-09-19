import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cwobmmbvu.css';
import '../../css/s/s9kj1l5gv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cwobmmbvu"/><path class="s9kj1l5gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dashboard-circle-edit"} {...others} />);
}

export default Component;
