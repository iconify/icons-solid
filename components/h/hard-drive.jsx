import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/ho_s04bel.css';
import '../../css/r/rwmgdgvcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ho_s04bel"/><path class="rwmgdgvcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:hard-drive"} {...others} />);
}

export default Component;
