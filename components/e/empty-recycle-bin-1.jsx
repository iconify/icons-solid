import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n0jgj9b1n.css';
import '../../css/k/k64a2fhzl.css';
import '../../css/g/ghqnobbvu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n0jgj9b1n"/><path class="k64a2fhzl"/><path class="ghqnobbvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:empty-recycle-bin-1"} {...others} />);
}

export default Component;
