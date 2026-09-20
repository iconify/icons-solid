import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fll0uqb6i.css';
import '../../css/p/pfg0j7owr.css';
import '../../css/m/m7ajg_m0j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="fll0uqb6i"/><path class="pfg0j7owr"/><path class="m7ajg_m0j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cloud-warning"} {...others} />);
}

export default Component;
