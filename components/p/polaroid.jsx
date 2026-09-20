import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pljo4acqz.css';
import '../../css/e/e2xb-7bpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pljo4acqz"/><path class="e2xb-7bpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:polaroid"} {...others} />);
}

export default Component;
