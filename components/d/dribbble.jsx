import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpuequbzk.css';
import '../../css/q/q1gyxpbep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="cpuequbzk"/><path class="q1gyxpbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:dribbble"} {...others} />);
}

export default Component;
